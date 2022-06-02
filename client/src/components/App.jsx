import React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import RelatedProducts from './Related/RelatedProducts.jsx';
import api from '../../API';
import Reviews from './Reviews/Reviews.jsx';
import OverView from './Overview/Overview.jsx';
import { Body, Header, Ratings, ReviewsList, Review, SubHeader, GlobalStyle, StyledButton } from './Styles.styled.js';
import Outfit from './Related/Outfit.jsx';


export const UserContext = createContext();

const App = (props) => {
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [relatedId, setRelatedId] = useState(40344);
  let id = 0;
  useEffect(() => {

    api.getProductInformation(relatedId, (err, data) => {
      
      if (err) {
        console.log(err)
      } else {
        console.log({data});
        setProducts(data);
        id = data.id
        api.getProductStyles(id, (err, data) => {
          console.log(id);
          if (err) {
            console.log(err);
          } else {
            setStyles(data);
          }
        })
      }
    })
  }, [relatedId]);

  if (products.name) {
    console.log(products.id, styles);
    return (
      <UserContext.Provider value={{ currentPD: products, Img: styles }}>
        <div>
          <GlobalStyle color='#f5f5f5' />
          <div>
            {products.id ? <OverView id={products.id} /> : null}
          </div>
          <div>
            <br></br>
          </div>
          <div>
            <h2> Related Product</h2>
             <RelatedProducts setRelatedId={setRelatedId}/>
          </div>
          <div>
            <h2>Outfit List</h2>
            <Outfit />
          </div>
          <div>
            <Reviews relatedId={relatedId}/>
          </div>
        </div>
      </UserContext.Provider>
    )
  }
}

export default App;

