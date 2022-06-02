import React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import RelatedProducts from './Related/RelatedProducts.jsx';
import api from '../../API';
import Reviews from './Reviews/Reviews.jsx';
import OverView from './Overview.jsx';
import { Body, Header, Ratings, ReviewsList, Review, SubHeader, GlobalStyle, StyledButton } from './Styles.styled.js';
import Outfit from './Related/Outfit.jsx';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {library} from '@fortawesome/fontawesome-svg-core';
// import {fas, faFontAwesome} from '@fortawesome/free-solid-svg-icons';
// //import { faBrands, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
// library.add(fas,faFontAwesome);





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
          <h1>Products </h1>
          <div>
            {/* {products.id ? <OverView id={products.id} /> : null} */}
          </div>
          <div>
            <br></br>
          </div>
          <div>
             <RelatedProducts id={relatedId} setRelatedId={setRelatedId}/>
          </div>
          <div>
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

