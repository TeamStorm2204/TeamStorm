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
 //console.log('waht is the data', data.currentPD.id);
  // const id=props.id;
  const id=data.currentPD.id;
  const [relatedItems, setRelative]=useState([]);
  const [hover, setHover]=useState([]);

  useEffect( ()=> {
    API.getRelatedProducts(id, (err, data)=> {
      if(err) {
        console.log(err);
      }else {
        var totalData=[];
        var size=[];
        var len=data.length;
    console.log('realted' , data);
          for (let i=0; i<data.length;i++) {
            API.getProductInformation(data[i], (err, result)=> {
              if(err) {
                console.log(err);
              }else {
                  API.getProductStyles(data[i], (err, data)=> {
                  if(err) {
                    console.log(err);
                  }else {
                    console.log('waht is the rlated infor', data);
                    var urls=[];
                    var price='';
                    var discount='';
                    for ( let i=0; i<data.results.length; i++) {

                      if( data.results[i]['default?']===true){
                         urls=data.results[i].photos;//an array of object of default img urls
                         discount=data.results[i].sale_price;

                      }
                    }
                    if(urls.length===0) {
                      console.log('anudatatat',data.results)
                      urls=data.results[0].photos;
                      discount=data.results[0].sale_price;
                    }
                    result.image=urls;
                    result.discount=discount;
                    size.push('125');
                    totalData.push(result);
                    console.log('waht is the total data before return',totalData);
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
      },[id]);

      if (hover.length>0) {
       // console.log ('idddd', id);
        return (  <ImageSlider setRelatedId={props.setRelatedId} overViewData= {id} images={relatedItems} /> )
      }

    }
export default RelatedProducts;