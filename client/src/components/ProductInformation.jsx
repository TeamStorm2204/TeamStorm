import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';

const ProductInformation =(props)=> {
    const [product, setProduct] = useState([]);
    console.log({props})
    console.log(product)
    useEffect(() => {
        API.getProductInformation(props.id, (err, data) => {
          setProduct(data);
        })
      }, []);

    return (
        <div>
            <h4>{product.category}</h4>
            <h1>{product.name}</h1>
            <h3>$ {product.default_price}</h3>
        </div>

    )
}
export default ProductInformation;