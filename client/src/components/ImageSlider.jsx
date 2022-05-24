import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { Images, Slide, LeftArrow, RightArrow} from './StyleRelated.js';
import {IconContext} from 'react-icons';
import {ImStarEmpty} from 'react-icons/im';
import { Card, Description, Icon} from './StyleRelated.js';
import Modal from './Modal.jsx';


const ImageSlider = ({
  images = [],
  }) => {
    const [modal, setModal] = useState(false);

var imagesUpdate=[];//collect all data that has url
for (var i=0; i<images.length;i++) {
  if(images[i].image[0].url!==null){
    imagesUpdate.push(images[i]);
  }
}

  const [current, setCurrent] = useState(0);
  const length=imagesUpdate.length;
  const [color, setColor]=useState(Array(length).fill('black'));
  const [hover, setHover]=useState(Array(length).fill('200'));
  const nextSlide=()=> {
    setCurrent(current===length-1?0:current+1);
  }
  const prevSlide=()=> {
    setCurrent(current===0? length-1:current-1);

  }


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

  return (
    <Slide>
      {current!==0?
      (<LeftArrow onClick={prevSlide}>
      <FaArrowAltCircleLeft/>
      </LeftArrow>):null}

      {current!==length-1?
      (<RightArrow onClick={nextSlide}>
      <FaArrowAltCircleRight />
      </RightArrow>):null}

       {imagesUpdate.map((item, index) => {
         var sizeData=hover.slice();
         if(item.image[0].url!==null) {
           if(index===current || index===current+1) {
           return (
             <div>
          <Card>
          <img
          src={item.image[0].url}
          key={index}
          onMouseEnter={()=>{sizeData[index]='220'; setHover(sizeData)}}
          onMouseLeave={()=>{sizeData[index]='200'; setHover(sizeData)}}

          height={sizeData[index]}
          alt='pictures'
         />

         <Icon>
             <IconContext.Provider value={{ color: color[index], size: '1.5em' }}>
                 <div onClick={()=>{toggleColor(index); setModal(true)}} >
                     <ImStarEmpty/ >
                </div>
             </IconContext.Provider>
         </Icon>
         {modal&&<Modal closeModal={setModal} />}
         </Card>
         <Description style={{fontSize:15}}>
             <h4 key={index} > {item.name}   </h4>
             <span key={index+3} >{item.category}</span>
                {item.discount?
                  <div>
                   <h4 key={index+1}> Price:${item.discount} </h4>
                   <h4 key={index+4} style={{textDecoration:'line-though'}}> ${item.default_price} </h4>
                  </div>
                  :<h4 key={index+1}> Price:${item.default_price}</h4>
                  }
          </Description>

         </div>
           )
          }
         }
        })
      }
     </Slide>
  )
  }
//  <button>

//  </button>


export default ImageSlider;