import React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import api from '../../API';
import Reviews from './Reviews.jsx';
import OverView from './Overview.jsx';
import { Body, Header, Ratings, ReviewsList, Review, SubHeader, GlobalStyle, StyledButton } from './Styles.styled.js';
import Outfit from './Outfit.jsx';


export const UserContext=createContext();

 const App = (props) => {
  const [products, setProducts] = useState([]);
  //new
  const [styles, setStyles]=useState([]);

  useEffect(() => {
    api.getProducts((err, data) => {
      if(err)  {
        console.log(err)
      } else {
         setProducts(data[0]);
         //new
         var id=data[0].id;
         api.getProductStyles( id, (err, data)=> {
           if(err) {
             console.log(err);
           } else {
             setStyles(data);
           }

         })
      }

    })
  }, []);

  if(styles.product_id) {
  return (
   <UserContext.Provider value={{currentPD: products, Img:styles}}>
    <div>
      <GlobalStyle color='#f5f5f5' />
      <h1>Products </h1>
      <div>
       {products.id? <OverView id={products.id} />:null}
      </div>
          <div>
            <br></br>
            <h2>{products.name}</h2>
            <h3>{products.slogan}</h3>
            <div>{products.description}</div>
        </div>
      <div>
        <h2> Related Product</h2>
       <RelatedProducts  />
      </div>
      <div>
        <h2> Outfit Lists</h2>
        <Outfit /*styles={} name={} price={}*/ />
      </div>
      <div>
        {products.id? <Reviews id={products.id} />:null}
      </div>
    </div>
    </UserContext.Provider>
  )
  }
}


export default App;