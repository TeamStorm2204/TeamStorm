import React from 'react';
import API from '../../API';
import { useEffect, useState, createContext, useContext } from 'react';
const config = require('../../../config.js');
import {UserContext} from './App.jsx';
import axios from 'axios';

const RelatedProduct =(props)=> {
  const data=useContext(UserContext);
  const [relatedItems, setRelative]=useState([]);
  useEffect( ()=> {
    API.getRelatedProducts(props.id, (err, data)=> {
      if(err) {
        console.log(err);
      }else {
          var relatedInfor=[];
          for (let i=0; i<data.length;i++) {
            API.getProductInformation(data[i], (err, data)=> {
              if(err) {
                console.log(err);
              }else {
                setRelative(prev=>[...prev, data]);
              }
            })
          }}
        })
      },[]);



    return (
      <div>
         {relatedItems.length===4? relatedItems.map( (item, index)=>(
         <div>
         <div key={index}>{item.name}</div>
         <div key={index+1}>Price:${item.default_price}</div>
         </div>
     )):null }


     </div>
    )

}
export default RelatedProduct;