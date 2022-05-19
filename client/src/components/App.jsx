import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../API'

const App = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts((err, data) => {
      console.log('data: ', data)
      setProducts(data);
    })
  }, []);

  return (
    <div>
      <h1>Products </h1>
      {products.map(t => {
        { console.log('t: ', t) }
        return (
          <div>
            <br></br>
            <h2>{t.name}</h2>
            <h3>{t.slogan}</h3>
            <div>{t.description}</div>
          </div>
        )
      })}
    </div>
  )
}

export default App;