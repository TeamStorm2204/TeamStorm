import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {DefaultImgWrap, ThumbImg, BorderThumbImg} from './OverviewStyles.js';

const ProductView =(props)=> {
  const photos = props.selectedStyle.photos;
  // photos.push(photos[1]);
  // photos.push(photos[1]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [indexStart, setIndexStart] = useState(0);
  const [indexEnd, setIndexEnd] = useState(6);

    return (
      <DefaultImgWrap img={photos[selectedIndex].url}>
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
        {photos.map((photo, index)=>(
          (index >= indexStart && index <= indexEnd) ?
            (selectedIndex !== index)? 
              <ThumbImg src={photo.thumbnail_url} key={index}  onClick={()=>setSelectedIndex(index)}/>:
              <BorderThumbImg src={photo.thumbnail_url} key={index} onClick={()=>setSelectedIndex(index)}/>:
            null
          ))}
      </div>
      </DefaultImgWrap>
    )
}
export default ProductView;