import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';
import ProductStyleSelector from './ProductStyleSelector.jsx';
import ProductView from './ProductView.jsx';
import ExpandedView from './ExpandedView.jsx';
import { ThemeProvider } from 'styled-components';
import {Header, SubHeader, ProductDetailsContainer} from './OverviewStyles.js';
import Stars from './Stars.jsx';

const Overview =(props)=> {
    const [product, setProduct] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [styles, setStyles] = useState([]);
    const [reviewCount, setReviewCount] = useState(5);


    useEffect(() => {
        API.getProductStyles(props.id, (err, data) => {
            // console.log('dat', data.results)
          setStyles(data.results);
        })
      }, [props.id]);

    useEffect(() => {
        API.getProductInformation(props.id, (err, data) => {
            // console.log(data);
          setProduct(data);
        })
      }, [props.id]);

    const scrollTo = function(){
      // console.log('hi');
      window.scrollBy(0, 600);
    }

    return (
        <div style={{display:'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
            {styles.length? <ExpandedView selectedStyle={styles[selectedIndex || 0]}></ExpandedView>:null}
          <div>
            {styles.length? <ProductView selectedStyle={styles[selectedIndex || 0]}></ProductView>:null}
          </div> 
          <ProductDetailsContainer>
            <div>
            <SubHeader>{product.category}</SubHeader>
            <Header>{product.name}</Header>
            {product.description? <SubHeader>{product.description}</SubHeader>: null}
            {(reviewCount > 0)? <SubHeader onClick={scrollTo}><Stars id={props.id}></Stars> Read all [#] reviews</SubHeader>: null}
            {styles.length? <ProductStyleSelector id={props.id} styles={styles} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex || 0} ></ProductStyleSelector> :null}
            </div>
          </ProductDetailsContainer> 

        </div>
    )
}
export default Overview;