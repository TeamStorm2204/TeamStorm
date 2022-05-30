import React from 'react';
import API from '../../../API';
import { useEffect, useState } from 'react';
import ProductStyleSelector from './ProductStyleSelector.jsx';
import ProductView from './ProductView.jsx';
import ExpandedView from './ExpandedView.jsx';
import DefaultView from './DefaultView.jsx';
import { ThemeProvider } from 'styled-components';
import {Header, SubHeader, ProductDetailsContainer} from './DefaultStyles.js';
import Stars from '../Stars.jsx';

const Overview =(props)=> {
    const [product, setProduct] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [styles, setStyles] = useState([]);
    const [reviewCount, setReviewCount] = useState(1);
    const [expanded, setExpanded] = useState(false);


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

        // console.log(window)
      let reviews = window.document.getElementById('Reviews');
      reviews.scrollIntoView({behavior: "smooth"});
    }

    return (
        expanded? <ExpandedView selectedStyle={styles[selectedIndex || 0]} setExpanded={setExpanded}></ExpandedView>:
        <div style={{display:'flex', flexWrap:'wrap', flexDirection: 'row'}}>
            {/* {styles.length? <ExpandedView selectedStyle={styles[selectedIndex || 0]}></ExpandedView>:null} */}
        
          {/* <div >
            {styles.length? <ProductView selectedStyle={styles[selectedIndex || 0]}></ProductView>:null}
          </div>  */}

          
          {/* <div style={{position:'relative', minWidth:'55%', height:'100%'}}>
            <div style={{width:'100%', height: '100%'}}>
            {styles.length? <DefaultView selectedStyle={styles[selectedIndex || 0]}></DefaultView>:null}
            </div>
          </div>  */}
          <div style={{position:'relative', minWidth:'60%'}}>
          {styles.length? <DefaultView selectedStyle={styles[selectedIndex || 0]} setExpanded={setExpanded}></DefaultView>:null}
          </div>
          
          <div style={{}}>
          <ProductDetailsContainer flex>
            <SubHeader>{product.category}</SubHeader>
            <Header>{product.name}</Header>
            {product.description? <SubHeader>{product.description}</SubHeader>: null}
            {(reviewCount > 0)? <SubHeader onClick={scrollTo}><Stars id={props.id} setReviewCount={setReviewCount}></Stars> Read all {reviewCount} reviews</SubHeader>: null}
            {styles.length? <ProductStyleSelector id={props.id} styles={styles} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex || 0} ></ProductStyleSelector> :null}
          </ProductDetailsContainer> 
          </div>

        </div>
    )
}
export default Overview;