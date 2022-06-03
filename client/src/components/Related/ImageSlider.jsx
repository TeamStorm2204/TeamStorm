import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { Slide, LeftArrow, RightArrow, Card, Description, Icon, OutCard, StarButton} from './StyleRelated.js';
import {IconContext} from 'react-icons';
import {ImStarEmpty} from 'react-icons/im';
import {ImArrowLeft, ImArrowRight} from 'react-icons/im';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';
import Modal from './Modal.jsx';
import Stars from '../Stars.jsx';

// eslint-disable-next-line react/prop-types
const ImageSlider = ({images = [], setRelatedId, overViewData }) => {
  var imagesUpdate = [];//collect all data that has url
  for (var i = 0; i < images.length; i++) {
    if (images[i].image[0].url !== null){
      imagesUpdate.push(images[i]);
    }
  }

  const [current, setCurrent] = useState(0);
  const length = imagesUpdate.length;
  const [currentSub, setCurrentSub] = useState(Array(length).fill(0));
  const [hover, setHover] = useState(Array(length).fill('150'));
  const [modal, setModal] = useState({item: {}, status: false});

  const nextSlide = ()=> {
    setCurrent(current === length-1?0:current+1);
  }
  const prevSlide = ()=> {
    setCurrent(current ===0? length-1:current-1);

  }

  return (
    <div>
      {modal.status&&<Modal closeModal = {setModal} length = {length} id={overViewData} relatedInf = {modal.item}/>}
      <Slide>
        <div style = {{marginLeft:'25', marginRight:'25', display:'flex', gap: '50px',     alignItems:'center'}}>
          {current !==0?
          (<LeftArrow onClick={prevSlide}>
          <FaChevronCircleLeft/>
          </LeftArrow>):null}

          {current !== length-1?
          (<RightArrow onClick = {nextSlide}>
          <FaChevronCircleRight />
          </RightArrow>):null}

          {imagesUpdate.map((item, index) => {
            var sizeData=hover.slice();
            if (item.image[0].url !== null) {
              if (index === current || index === current+1||index === current+2) {
                return (
                  <OutCard>
                    <Card id="carousel" url = {item.image[0].url}>
                    <Icon>
                      <IconContext.Provider value={ {size: '1.5em'} }>
                        <StarButton onClick={()=>{ var modalNew={item:item, status:true}; setModal(modalNew)}}>
                            <ImStarEmpty/ >
                        </StarButton>
                      </IconContext.Provider>
                    </Icon>
                    </Card>
                    <div onClick={() => {setRelatedId(item.id)}}>
                      <Description style = {{fontSize:15}}>
                        <span key = {index} style = {{fontWeight:'bold'}}> {item.name} </span>
                      </Description>
                      <Description style = {{fontSize:12}}>
                        <span key={index+3} >{item.category}</span>
                      </Description>
                      <Description style = {{fontSize:12}}>
                        {item.discount?
                        <div>
                          <span key={index+1}> Price:${item.discount} </span>
                          <span key={index+4} style={{textDecoration:'line-though'}}> ${item.default_price} </span>
                        </div>
                        :<span key={index+1}> Price:${item.default_price}</span>
                        }
                      </Description>
                      <Description>
                        <Stars id={item.id} value={ {size: '1.5em'} } />
                      </Description>
                    </div>
                  </OutCard>
                )
              }
            }
          })
          }
        </div>
      </Slide>
    </div>
  )
}




export default ImageSlider;