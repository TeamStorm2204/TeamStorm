import React from 'react';
import { useEffect, useState } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import api from '../../API';
import Reviews from './Reviews.jsx';
import OverView from './Overview.jsx';
import { Body, Header, Ratings, ReviewsList, Review, SubHeader, GlobalStyle, StyledButton } from './Styles.styled.js';

const App = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts((err, data) => {
      setProducts(data[0]);
    })
  }, []);

  return (
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
        {/* <hr> */}
      <div>
        <h2> Related Product</h2>
        {products.id? <RelatedProducts id={products.id} />:null}
      </div>
      <div>
        {products.id? <Reviews id={products.id} />:null}
      </div>
    </div>
  )
}

export default App;