import React from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';
import {DefaultImgWrap, ThumbImg, BorderThumbImg, Arrow, DefImg} from './DefaultStyles.js';

const DefaultView =(props)=> {
  const photos = props.selectedStyle.photos.concat(props.selectedStyle.photos);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [indexStart, setIndexStart] = useState(0);
  const [indexEnd, setIndexEnd] = useState(6);

  const rightArrowClick =function() {
    setIndexStart(indexStart-1);
    setIndexEnd(indexEnd-1);
  }
  const leftArrowClick =function() {
    setIndexStart(indexStart+1);
    setIndexEnd(indexEnd+1);
  }

  const mainArrowClick =function(direction) {
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

  const expandView = function(e) {
      if(e.target.getAttribute('value') === 'magnify') {
      props.setExpanded(true)
      }
  }


    return (
      <DefaultImgWrap img={photos[selectedIndex].url} style={{display:'flex', justifyContent:'center', cursor:'zoom-in'}} value="magnify" onClick={expandView}>
      <div style={{display: 'flex', alignItems: 'center', cursor: 'default'}}>
      {(selectedIndex > 0)? <FaChevronCircleLeft color="white" fontSize="1.5em" style={{ position: 'absolute', left: '2px',}} onClick={mainArrowClick}></FaChevronCircleLeft> : null}
      {(photos.length > (selectedIndex + 1)) ? <FaChevronCircleRight color="white" fontSize="1.5em" style={{ position: 'absolute', right: '2px'}} onClick={()=>{mainArrowClick('left')}}></FaChevronCircleRight > : null}
      </div>

      <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-evenly', position: 'absolute', bottom: '0px', alignItems: 'center', cursor: 'default'}}>
        {(indexStart > 0) ? <Arrow onClick={rightArrowClick}><i class="fas fa-angle-left fa-lg" /></Arrow> : null}
        {photos.map((photo, index)=>(
          (index >= indexStart && (index <= indexEnd)) ?
          (selectedIndex !== index)? 
              <ThumbImg src={photo.thumbnail_url} key={index}  onClick={()=>setSelectedIndex(index)}/>:
              <BorderThumbImg src={photo.thumbnail_url} key={index} onClick={()=>setSelectedIndex(index)}/>:
            null
          ))}
        {(photos.length > (indexEnd + 1)) ? <Arrow onClick={leftArrowClick}><i class="fas fa-angle-right fa-lg" /></Arrow > : null}
      </div>
      </DefaultImgWrap>
    )
}
export default DefaultView;