import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../API'
import Reviews from './Reviews.jsx'
import { Body, Header, Ratings, ReviewsList, Review, SubHeader, GlobalStyle, StyledButton } from './Styles.styled.js';

const App = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts((err, data) => {
      //console.log('data: ', data)
      setProducts(data);
    })
  }, []);

  return (
    <div>
      <GlobalStyle color='#f5f5f5' />
      <h1>Products </h1>
      {products.map(t => {
        return (
          <div>
            <br></br>
            <h2>{t.name}</h2>
            <h3>{t.slogan}</h3>
            <div>{t.description}</div>
          </div>
        )
      })}
      <Reviews />
    </div>
  )
}

export default App;