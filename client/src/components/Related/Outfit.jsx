
import React from 'react';
import API from '../../../API';
import {ImArrowLeft, ImArrowRight} from 'react-icons/im';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';
import { useEffect, useState, createContext, useContext } from 'react';
import {IoAddOutline} from 'react-icons/io5';
import{RiHeartAddFill} from "react-icons/ri";
import {IconContext} from 'react-icons';
import axios from 'axios';
import {UserContext} from '../App.jsx';
import { CardFit, Description, Add, Cross, PlusButton, OutCardFit, RightArrow, LeftArrow, Title, SlideOutFit} from './StyleRelated.js';
import {VscError} from 'react-icons/vsc';
import Stars from '../Stars.jsx';


const Outfit = (props) => {
  const breakPoints = [
    {width:1, itemsToShow:1}, {width:200,itemsToShow:2},{width:350,itemsToShow:3},{width:500,itemsToShow:4}
  ]
  const data = useContext(UserContext);

  const [current, setCurrent] = useState(0);
  const [outfits, setOutfits] = useState(localStorage.getItem('outfits')? JSON.parse(localStorage.getItem('outfits')): []);
  const[ img, setImg] = useState([]);

  function addOutfit(data) {
    var count=0;
    for (var i=0; i<outfits.length; i++) {
      if(outfits[i].url === data.Img.results[0].photos[0].url){
        count++;
        return ;
      }
    }
    if(count === 0) {
      var url = data.Img.results[0].photos[0].url; //an array of object of default img urls
      var discount = data.Img.results[0].sale_price;
      var price = data.Img.results[0].original_price;
      var name = data.Img.results[0].name;
      var outfit = {url:url, discount:discount, price:price, name:name};
      var currentOutfits = outfits.slice();
      currentOutfits.push(outfit);
      localStorage.setItem("outfits", JSON.stringify(currentOutfits));
      setOutfits(prev => [...prev, outfit]);

    }
  }
  function deleteFit(index) {
    var update = [];
    for (let i = 0; i < outfits.length; i++) {
      if(i !== index) {
        update.push(outfits[i])
      }
    }
    localStorage.setItem("outfits", JSON.stringify(update));
    setOutfits(update);
  }

  const length=outfits.length;
  console.log('length',length);
  const nextSlide = () => {
    setCurrent(current === length-1? 0: current+1);
  }
  const prevSlide=()=> {
    setCurrent(current===0? length-1: current-1);

  }

  return (
    <div>
      <Title>Outfit List</Title>
      <hr style = {{width:'50%', backgroundColor:'rgba(0,0,0,0.2)',height:'2px', display:'felx', margin:'-10'}}/>

      <IconContext.Provider value={{ size: '2em' }}>
        <PlusButton onClick = {() => {addOutfit(data)}} ><RiHeartAddFill /></PlusButton>
      </IconContext.Provider>

      <SlideOutFit position={length}>
        <div style = {{marginLeft:'25', marginRight:'25', display:'flex', gap: '50px', alignItems:'center'}}>

          {length>0&& current !== 0?
          (<LeftArrow onClick={prevSlide}>
            <FaChevronCircleLeft/>
            </LeftArrow>): null}

          {length>3&&current !== length-1?
          (<RightArrow onClick = {nextSlide}>
          <FaChevronCircleRight />
          </RightArrow>): null}

          {outfits.length>0?
          (outfits.map( (item, index) => {
            if (index === current|| index === current+1||index===current+2) {
              return (
                <OutCardFit>
                  <CardFit url = {item.url} >
                    <Cross>
                      <div onClick = {()=>{  deleteFit(index)}}>
                      <VscError/ >
                      </div>
                    </Cross>
                  </CardFit >
                  <Description style = {{fontSize:15}}>
                    <span key = {index} style={{fontWeight:'bold'}}> {item.name} </span>
                  </Description>
                  <Description style={{fontSize:12}}>
                    <span key = {index+3} >{item.category}</span>
                  </Description>
                  <Description style={{fontSize:12}}>
                    {item.discount?
                    (<div>
                      <span key = {index+1}> Price: ${item.discount} </span>
                      <span key = {index+4} style = {{textDecoration:'line-though'}}> ${item.default_price} </span>
                    </div>)
                    : <span key = {index+1}> Price:${item.price}</span>
                    }
                  </Description>
                  <Description>
                    <Stars id = {data.currentPD.id} value = { {size: '1.5em'} } />
                  </Description>
                </OutCardFit>
              )
            }
          })
          ): null
          }
          </div>
      </SlideOutFit>
      <hr style={{width:'80%', display:'felx', marginTop:'5em'}}/>
    </div>
  )

}
export default Outfit;
