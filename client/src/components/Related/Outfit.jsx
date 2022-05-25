
import React from 'react';
import API from '../../../API';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { useEffect, useState, createContext, useContext } from 'react';
import {IoAddOutline} from 'react-icons/io5';
import {IconContext} from 'react-icons';
import axios from 'axios';
import {UserContext} from '../App.jsx';
import { Cd,Card, Description, Space, Add, Cross} from './StyleRelated.js';
import Carousel from 'react-elastic-carousel';
import {VscError} from 'react-icons/vsc';
import Stars from '../Stars.jsx';


const Outfit=(props)=> {
  const breakPoints= [
    {width:150, itemsToShow:1}, {width:300,itemsToShow:2}
  ]
  const data=useContext(UserContext);


  const [outfits, setOutfits]=useState(localStorage.getItem('outfits')?JSON.parse(localStorage.getItem('outfits')):[]);
  const[ img, setImg]=useState([]);

 console.log('list', outfits);


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

      var currentOutfits=outfits.slice();
       //console.log('outfit', outfit, currentOutfits);
      currentOutfits.push(outfit);
      //console.log('total', currentOutfits);
      localStorage.setItem("outfits", JSON.stringify(currentOutfits));
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
    localStorage.setItem("outfits", JSON.stringify(update));
    setOutfits(update);
  }


  return (

    <div>

         <Add>
               <IconContext.Provider value={{ size: '4em' }}>
                 <div>
                 <button  aria-label='add' onClick={()=> {addOutfit(data)}}><IoAddOutline/></button>
                 </div>
               </IconContext.Provider>
        </Add>
         <Space>
           { outfits.length>0?
                 (
                 <Carousel breakPoints={breakPoints}>
                 {
                   outfits.map( (item, index)=>{
                       return (
                         <div>
                           <Card>
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
                           </Card>
                           <Description style={{fontSize:15}}>
           <span key={index} style={{fontWeight:'bold'}}> {item.name} </span>
          </Description>
          <Description style={{fontSize:15}}>
              <span key={index+3} >{item.category}</span>
                {item.discount?
                  (<div>
                   <span key={index+1}> Price:${item.discount} </span>
                   <span key={index+4} style={{textDecoration:'line-though'}}> ${item.default_price} </span>
                  </div>)
                  :<span key={index+1}> Price:${item.price}</span>
                  }
            </Description>
            <Description>
             <Stars id={item.id} />
          </Description>

                           </div>
                       )
                     }
                  )
                }

                 </Carousel>):null
           }
         </Space>

   </div>
 )

}
export default Outfit;
