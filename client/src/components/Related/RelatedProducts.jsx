import React from 'react';
import API from '../../../API';
import { useEffect, useState, createContext, useContext} from 'react';
const config = require('../../../../config.js');
import {UserContext} from '../App.jsx';
import { Card, Description, Icon, Title} from './StyleRelated.js';
import Carousel from 'react-elastic-carousel';
import {TiStarOutline} from 'react-icons/ti';
import {IconContext} from 'react-icons';
import ImageSlider from './ImageSlider.jsx';


const RelatedProducts = (props) => {
  const data =  useContext(UserContext);
  const id = data.currentPD.id;
  const [relatedItems, setRelative] = useState([]);
  const [hover, setHover]=useState([]);

  useEffect(() => {
    API.getRelatedProducts(id, (err, data) => {
      if(err) {
        console.log(err);
      }else {
        var totalData = [];
        var size=[];
        var len = data.length;
          for (let i = 0; i < data.length; i++) {
            if(data[i] !== id) {
             API.getProductInformation(data[i], (err, result) => {
              if(err) {
                console.log(err);
              }else {
                API.getProductStyles(data[i], (err, data) => {
                  if(err) {
                    console.log(err);
                  }else {
                    var urls = [];
                    var price = '';
                    var discount = '';
                    for (let i = 0; i < data.results.length; i++) {
                      if (data.results[i]['default?'] === true) {
                        urls = data.results[i].photos;//an array of object of default img urls
                        discount = data.results[i].sale_price;
                      }
                    }
                    if (urls.length === 0) {
                      urls = data.results[0].photos;
                      discount = data.results[0].sale_price;
                    }
                    result.image = urls;
                    result.discount = discount;
                    size.push('125');
                    totalData.push(result);
                    if (totalData.length === len) {
                      setRelative(totalData);
                      setHover(size);
                    }
                  }
                })
              }
             })
            }
          }
      }
    })
  }, [id]);

  return (
    <div>
      <Title> You May Also Like</Title>
      <hr style = {{width: '50%', backgroundColor: 'rgba(0,0,0,0.2)', height: '2px', display: 'felx', margin: '-10'}}/>
      {hover.length > 0?
         // eslint-disable-next-line react/prop-types
      (<ImageSlider setRelatedId = {props.setRelatedId} overViewData = {id} images = {relatedItems} /> ): null
      }
    </div>
  )
}
export default RelatedProducts;