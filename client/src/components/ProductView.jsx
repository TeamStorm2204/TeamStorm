import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {DefaultImgWrap, ThumbImg, BorderThumbImg, Arrow} from './OverviewStyles.js';

const ProductView =(props)=> {
  const photos = props.selectedStyle.photos.concat(props.selectedStyle.photos);
  // photos.push(photos[1]);
  // photos.push(photos[1]);
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

  const mainRightArrowClick =function() {
    index = selectedIndex - 1;
    setSelectedIndex(index);
    if(index < indexStart)  {
      let indexDifference = indexStart - index;
      setIndexStart(index);
      setIndexEnd(indexEnd-indexDifference);
    }
  }
  const mainLeftArrowClick =function() {
    index = selectedIndex + 1;
    setSelectedIndex(selectedIndex + 1);
    if(index < indexStart)  {
      setIndexEnd(index);
      setIndexStart(index - 6);
    }
  }

    return (
      <DefaultImgWrap img={photos[selectedIndex].url} >
      {/* {(indexStart > 0)? <Arrow onClick={mainRightArrowClick}><i class="fas fa-angle-left fa-lg" /></Arrow> : null}
      {(photos.length > (indexEnd)) ? <Arrow style={{}}onClick={leftArrowClick}><i class="fas fa-angle-right fa-lg" /></Arrow > : null} */}
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
        {(indexStart > 0) ? <Arrow onClick={rightArrowClick}><i class="fas fa-angle-left fa-lg" /></Arrow> : null}
        {photos.map((photo, index)=>(
          (index >= indexStart && (index <= indexEnd)) ?
          (selectedIndex !== index)? 
              <ThumbImg src={photo.thumbnail_url} key={index}  onClick={()=>setSelectedIndex(index)}/>:
              <BorderThumbImg src={photo.thumbnail_url} key={index} onClick={()=>setSelectedIndex(index)}/>:
            null
          ))}
        {(photos.length > (indexEnd)) ? <Arrow onClick={mainLeftArrowClick}><i class="fas fa-angle-right fa-lg" /></Arrow > : null}
      </div>
      </DefaultImgWrap>
    )
}
export default ProductView;