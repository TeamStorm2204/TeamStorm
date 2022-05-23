import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';
import ProductStyleSelector from './ProductStyleSelector.jsx';
import ProductView from './ProductView.jsx';
import { ThemeProvider } from 'styled-components';
import {Header, SubHeader} from './OverviewStyles.js';

const Overview =(props)=> {
    const [product, setProduct] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [styles, setStyles] = useState([]);

    useEffect(() => {
        API.getProductStyles(props.id, (err, data) => {
            console.log('dat', data.results)
          setStyles(data.results);
        })
      }, []);

    useEffect(() => {
        API.getProductInformation(props.id, (err, data) => {
            console.log(data);
          setProduct(data);
        })
      }, []);

    return (
        <div style={{display:'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
          <div>
            {styles.length? <ProductView selectedStyle={styles[selectedIndex || 0]}></ProductView>:null}
          </div> 
          <div>
            <div>
            <SubHeader>{product.category}</SubHeader>
            <Header>{product.name}</Header>
            {styles.length? <ProductStyleSelector id={props.id} styles={styles} setSelectedIndex={setSelectedIndex} selectedStyle={styles[(selectedIndex || 0)] }></ProductStyleSelector> :null}
            </div>
          </div> 
        </div>
    )
}
export default Overview;