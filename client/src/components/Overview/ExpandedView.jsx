import React from 'react';
import API from '../../../API';
import { useEffect, useState } from 'react';
import {FaChevronCircleLeft, FaChevronCircleRight, FaCircle, FaRegCircle, FaCompress} from 'react-icons/fa';
import {ZoomContainer, ExpandedContainer, SideContainer, LeftArrow, ExpandedImage, Compress, RightArrow, BottomContainer, ImageIcons, ImageIcon} from './ImageViewStyles.js'
import Zoom from 'react-img-zoom'

const ExpandedView =(props)=> {
  const photos = props.selectedStyle.photos
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [indexStart, setIndexStart] = useState(0);
  const [indexEnd, setIndexEnd] = useState(6);
  const [zoomMode, setZoomMode] = useState(false);

  const mainRightArrowClick =function(direction) {
    let index;
    if (direction === 'left') {
      index = selectedIndex + 1;
    } else {
      index = selectedIndex - 1;
    }
    setSelectedIndex(index);
    if(index < indexStart)  {
      setIndexStart(index);
      setIndexEnd(index + 6);
    }
    if(index > indexEnd)  {
      setIndexStart(index - 6);
      setIndexEnd(index);
    }
  }

  const contract =function(){
      props.setExpanded(false);
  }

  const magnify=function(e) {
    if(e.target.getAttribute('value') === 'magnify') {
        setZoomMode(!zoomMode);
    }
  }

  return (

    zoomMode?
    <ZoomContainer value="magnify" onClick={()=>{setZoomMode(!zoomMode)}}>
    <Zoom
    img={photos[selectedIndex].url}
    zoomScale={2.5}
    width={1000}
    height={600}
    />
    </ZoomContainer>
    :

    <ExpandedContainer value="magnify" onClick={magnify}>
      
      {(selectedIndex > 0)?
      <SideContainer>
        <LeftArrow>
          <FaChevronCircleLeft onClick={mainRightArrowClick}></FaChevronCircleLeft>
        </LeftArrow>
      </SideContainer>
       : null}

      <ExpandedImage src={photos[selectedIndex].url} loading="lazy" value="magnify"/>

      <SideContainer>
        <Compress>
          <FaCompress onClick={contract}></FaCompress>
        </Compress>
        {(photos.length > (selectedIndex + 1)) ? 
        <RightArrow>
          <FaChevronCircleRight onClick={()=>{mainRightArrowClick('left')}}/>
        </RightArrow> : null}
      </SideContainer>

      <BottomContainer>
      <ImageIcons>
      {photos.map((photo, index)=>
        <ImageIcon>
        {(selectedIndex === index)?
          <FaCircle key={index} onClick={()=>setSelectedIndex(index)}/>:
          <FaRegCircle key={index}  onClick={()=>setSelectedIndex(index)}/>
        }
        </ImageIcon>
      )}
      </ImageIcons>
      </BottomContainer>

    </ExpandedContainer>
    

  )
}
export default ExpandedView;
