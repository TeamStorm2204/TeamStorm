import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../API';
import RelatedProducts from './RelatedProducts.jsx';

const App = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts((err, data) => {
      console.log('data0: ', data[0].id)
      setProducts(data[0]);

    })
  }, []);

  return (
    <div>
      <h1>Products </h1>
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
    </div>
  )
}

export default App;