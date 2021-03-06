import React from 'react';
import API from '../../../API';
import { useEffect, useState } from 'react';
import ProductStyleSelector from './ProductStyleSelector.jsx';
import ExpandedView from './ExpandedView.jsx';
import DefaultView from './DefaultView.jsx';
import {Header, SubHeader, ProductDetailsContainer, Reviews, } from './OverviewStyles.js';
import Stars from '../Stars.jsx';

const Overview =(props)=> {
    const [product, setProduct] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [styles, setStyles] = useState([]);
    const [reviewCount, setReviewCount] = useState(1);
    const [expanded, setExpanded] = useState(false);
    const [selectedImg, setSelectedImg] = useState(0);

    useEffect(() => {
      setSelectedImg(0);
      setReviewCount(1);
      setExpanded(false);
      setSelectedIndex(null);
      API.getProductStyles(props.id, (err, data) => {
        if(!err){
        setStyles(data.results);
        }
      })
      API.getProductInformation(props.id, (err, data) => {
        if (!err) {
        setProduct(data);
        }
      })
    }, [props.id]);

    const scrollTo = function(){
      let reviews = window.document.getElementById('Reviews');
      reviews.scrollIntoView({behavior: "smooth"});
    }

    return (
        expanded? styles.length? 
        <div style={{position:'relative'}}>
          <ExpandedView selectedStyle={styles[selectedIndex || 0]} setExpanded={setExpanded}></ExpandedView>
        </div>: 
        null:
        <div>
        <div style={{ width:'80%', margin:'0 auto', display:'flex', flexFlow:'row wrap', gap:'5%', justifyContent:'center'}}>
        <div style={{position:'relative', maxWidth:'540px', minWidth:'300px', flexGrow: '1', flexShrink: '1', flexBasis:'300px'}}>
          {styles.length? <DefaultView selectedStyle={styles[selectedIndex || 0]} setExpanded={setExpanded} selectedImg={selectedImg} setSelectedImg={setSelectedImg}></DefaultView> : null}
        </div>

        <ProductDetailsContainer >
          <SubHeader>{product.category}</SubHeader>
          <Header>{product.name}</Header>
          <SubHeader>{product.description}</SubHeader>
            {(reviewCount > 0)? 
            <Reviews onClick={scrollTo}>
              <Stars id={props.id} setReviewCount={setReviewCount}></Stars> 
              <span style={{marginLeft: '2px'}}>Read all {reviewCount} reviews</span>
            </Reviews>: null}
          {styles.length? <ProductStyleSelector id={props.id} styles={styles} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex || 0} ></ProductStyleSelector> :null}
        </ProductDetailsContainer>
        </div>
      </div>
    )
}
export default Overview;