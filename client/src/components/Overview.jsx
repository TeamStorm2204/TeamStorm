
import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';
import ProductStyleSelector from './ProductStyleSelector.jsx';
// import ProductView from './ProductView.jsx';

const Overview =(props)=> {
    const [product, setProduct] = useState([]);
    const [selectedStyle, setSelectedStyle] = useState([]);
    const [styles, setStyles] = useState([]);

    useEffect(() => {
        API.getProductStyles(props.id, (err, data) => {
            console.log('dat', data.results)
          setStyles(data.results);
          setSelectedStyle 
        })
      }, []);

    useEffect(() => {
        API.getProductInformation(props.id, (err, data) => {
            console.log(data);
          setProduct(data);
        })
      }, []);

    return (
        <div>
            <div>
            <h4>{product.category}</h4>
            <h1>{product.name}</h1>
            {/* <h3>$ {product.default_price}</h3> */}
            </div>
            {styles.length? <ProductStyleSelector id={props.id} styles={styles} selectedStyle={styles[4]}></ProductStyleSelector> :null}
            {/* <ProductView id={props.id}></ProductView> */}
        </div>
    )
}
export default Overview;