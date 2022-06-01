
import React from 'react';
import API from '../../../API';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { useEffect, useState, createContext, useContext } from 'react';
import {IoAddOutline} from 'react-icons/io5';
import {IconContext} from 'react-icons';
import axios from 'axios';
import {UserContext} from '../App.jsx';
import { Cd,CardFit, Description, Space, Add, Cross, PlusButton, OutCardFit} from './StyleRelated.js';
import Carousel from 'react-elastic-carousel';
import {VscError} from 'react-icons/vsc';
import Stars from '../Stars.jsx';


const Outfit=(props)=> {
  const breakPoints= [
    {width:1, itemsToShow:1}, {width:200,itemsToShow:2},{width:350,itemsToShow:3},{width:500,itemsToShow:4}
  ]
  const data=useContext(UserContext);


  const [outfits, setOutfits]=useState(localStorage.getItem('outfits')?JSON.parse(localStorage.getItem('outfits')):[]);
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
      var currentOutfits=outfits.slice();
      currentOutfits.push(outfit);
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

         <Space>
           <Carousel breakPoints={breakPoints} style={{width:'1150px'}}>
              <OutCardFit onClick={()=> {addOutfit(data)}}>
                <Add>
                  <IconContext.Provider value={{ size: '4em' }}>
                    <PlusButton  aria-label='add'><IoAddOutline/></PlusButton>
                  </IconContext.Provider>
                </Add>
              </OutCardFit>
                { outfits.length>0?
                      (
                        outfits.map( (item, index)=>{
                            return (
                              <OutCardFit>
                                <CardFit url={item.url} >
                                <Cross>
                                      <div onClick={()=>{  deleteFit(index)}}>
                                      <VscError/ >
                                      </div>
                                  </Cross>
                                </CardFit >
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
                                  <Stars id={data.currentPD.id} value={ {size: '1.5em'} } />
                                  </Description>
                                </OutCardFit>
                            )
                          }
                  )
                ):null
              }
              </Carousel>
         </Space>
   </div>
 )

}
export default Outfit;
