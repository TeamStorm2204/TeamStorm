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
import PracView from './PracView.jsx';

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
      let reviews = window.document.getElementById('Reviews');
      reviews.scrollIntoView({behavior: "smooth"});
    }

    return (
        

        // expanded? <ExpandedView selectedStyle={styles[selectedIndex || 0]} setExpanded={setExpanded}></ExpandedView>:
        <div style={{display:'flex', flexFlow:'row wrap', gap:'5%', justifyContent:'space between'}}>
          {/* <div style={{position:'relative', minWidth:'60%'}}>
          {styles.length? <DefaultView selectedStyle={styles[selectedIndex || 0]} setExpanded={setExpanded}></DefaultView>:null}
        </div> */}

        <div style={{position:'relative', maxWidth:'540px', minWidth:'300px', flexGrow: '1', flexShrink: '1', flexBasis:'300px'}}>
          {styles.length? <PracView selectedStyle={styles[selectedIndex || 0]} setExpanded={setExpanded}></PracView> : null}
        </div>

          <ProductDetailsContainer style={{}}>
            <SubHeader>{product.category}</SubHeader>
            <Header>{product.name}</Header>
            {product.description? <SubHeader>{product.description}</SubHeader>: null}
            {(reviewCount > 0)? <SubHeader onClick={scrollTo}><Stars id={props.id} setReviewCount={setReviewCount}></Stars> Read all {reviewCount} reviews</SubHeader>: null}
            {styles.length? <ProductStyleSelector id={props.id} styles={styles} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex || 0} ></ProductStyleSelector> :null}
          </ProductDetailsContainer>

        </div>
    )
}
export default Overview;