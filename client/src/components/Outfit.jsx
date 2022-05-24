
import React from 'react';
import API from '../../API';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { useEffect, useState, createContext, useContext } from 'react';
import {IoAddOutline} from 'react-icons/io5';
import {IconContext} from 'react-icons';
import axios from 'axios';
import {UserContext} from './App.jsx';
import { Cd, Description, Fit, Space, Add, Cross} from './StyleRelated.js';
import Carousel from 'react-elastic-carousel';
import {VscError} from 'react-icons/vsc';


const Outfit=(props)=> {
  const breakPoints= [
    {width:150, itemsToShow:1}, {width:300,itemsToShow:2}
  ]
  const data=useContext(UserContext);


  const [outfits, setOutfits]=useState([]);
  const[ img, setImg]=useState([]);

  function addOutfit(data) {
    var count=0;
    for (var i=0; i<outfits.length; i++) {
      if(outfits[i].url===data.Img.results[0].photos[0].url){
        count++;
        return ;
      }
    }
    if(count===0) {
      var url=data.Img.results[0].photos[0].url; //an array of object of default img urls
      var discount=data.Img.results[0].sale_price;
      var price=data.Img.results[0].original_price;
      var name=data.Img.results[0].name;
      var outfit={url:url, discount:discount, price:price, name:name};
      //console.log('url', url)
      setOutfits(prev=>[...prev, outfit]);
    }
  }
  function deleteFit(index) {
    var update=[];
    for (let i=0; i<outfits.length;i++) {
      if(i!==index) {
        update.push(outfits[i])
      }
    }
    setOutfits(update);
  }


  return (
    <div>
       <Fit>
         <Add>
               <IconContext.Provider value={{ size: '4em' }}>
                 <div>
                 <button onClick={()=> {addOutfit(data)}}><IoAddOutline/></button>
                 </div>
               </IconContext.Provider>
        </Add>
         <Space>
           { outfits.length>0?
                 (<Carousel breakPoints={breakPoints}>
                 {outfits.map( (item, index)=>{
                       return (
                         <div>
                           <Cd>
                             <img
                               src={item.url}
                               key={index}
                               width='100'
                               alt={item.name}
                               />
                           <Cross>
                             {/* <IconContext.Provider > */}
                                 <div onClick={()=>{  deleteFit(index)}}>
                                 <VscError/ >
                                 </div>
                             {/* </IconContext.Provider> */}
                             </Cross>
                           </Cd>
                           <Description>
                             <h5 key={index+1} > {item.name}   </h5>
                             <h5 key={index+2} style={{fontSize:10}}>{item.category}</h5>
                             {item.discount?
                             <div>
                               <h5 key={index+5}> Price:${item.discount} </h5>
                               <h5 key={index+4} style={{textDecoration:'line-though'}}> ${item.price} </h5>
                             </div>
                               :<h5 key={index+5}> Price:${item.price}</h5>
                             }
                           </Description>

                           </div>
                       )
                     }
                 )
                 }

                 </Carousel>):null
           }
         </Space>
      </Fit>
   </div>
 )

}
export default Outfit;
