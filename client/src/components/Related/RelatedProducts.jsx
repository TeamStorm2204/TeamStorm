import React from 'react';
import API from '../../../API';
import { useEffect, useState, createContext, useContext } from 'react';
const config = require('../../../../config.js');
import {UserContext} from '../App.jsx';
import { Card, Description, Icon} from './StyleRelated.js';
import Carousel from 'react-elastic-carousel';
import {TiStarOutline} from 'react-icons/ti';
import {IconContext} from 'react-icons';
import ImageSlider from './ImageSlider.jsx';

const breakPoints=[
  {width:50, itemsToShow:1}, {width:300,itemsToShow:2}
]

const RelatedProducts =(props)=> {
  const data=useContext(UserContext);
  const id=data.currentPD.id;
  const [relatedItems, setRelative]=useState([]);
  const [hover, setHover]=useState([]);
  const [color, setColor]=useState(Array(10).fill('black'))

  function toggleColor(index) {
   if(color[index]==='black') {
     var colorNew=color.slice();
     colorNew[index]='red'
     setColor(colorNew);
   }else{
    var colorNew=color.slice();
    colorNew[index]='black'
    setColor(colorNew);
   }
  }

  useEffect( ()=> {
    API.getRelatedProducts(id, (err, data)=> {
      if(err) {
        console.log(err);
      }else {
        var totalData=[];
        var size=[];
        var len=data.length;

          for (let i=0; i<data.length;i++) {
            API.getProductInformation(data[i], (err, result)=> {
              if(err) {
                console.log(err);
              }else {
                  API.getProductStyles(data[i], (err, data)=> {
                  if(err) {
                    console.log(err);
                  }else {
                    for ( let i=0; i<data.results.length; i++) {
                      var urls=[];
                      var price='';
                      var discount='';
                      if( data.results[i]['default?']===true){
                         urls=data.results[i].photos;//an array of object of default img urls
                         discount=data.results[i].sale_price;
                      }
                    }
                    if(urls.length===0) {
                      urls=data.results[0].photos;
                      discount=data.results[i].sale_price;
                    }
                    result.image=urls;
                    result.discount=discount;
                    size.push('125');
                    totalData.push(result);
                    if(totalData.length===len) {
                      setRelative(totalData);
                      setHover(size);
                    }
                  }
                })
              }
            })

          }
      }
        })
      },[]);

      if (hover.length>0) {

        return (  <ImageSlider setRelatedId={props.setRelatedId} overViewData= {id} images={relatedItems} /> )
      }

    }
export default RelatedProducts;