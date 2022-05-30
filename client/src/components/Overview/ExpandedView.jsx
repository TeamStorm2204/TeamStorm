import React from 'react';
import API from '../../../API';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {FaChevronCircleLeft, FaChevronCircleRight, FaCircle, FaRegCircle} from 'react-icons/fa';
import {DefaultImgWrap, ThumbImg, BorderThumbImg, Arrow} from './OverviewStyles.js';

const ExpandedView =(props)=> {
  const photos = props.selectedStyle.photos.concat(props.selectedStyle.photos);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [indexStart, setIndexStart] = useState(0);
  const [indexEnd, setIndexEnd] = useState(6);

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
  return (

    <DefaultImgWrap img={photos[selectedIndex].url} style={{display:'flex', justifyContent:'center'}}>

      <div style={{display: 'flex', alignItems: 'center'}}>
      {(selectedIndex > 0)? <FaChevronCircleLeft color="white" fontSize="1.5em" style={{ position: 'absolute', left: '2px',}} onClick={mainRightArrowClick}></FaChevronCircleLeft> : null}
      {(photos.length > (selectedIndex + 1)) ? <FaChevronCircleRight color="white" fontSize="1.5em" style={{ position: 'absolute', right: '2px'}} onClick={()=>{mainRightArrowClick('left')}}></FaChevronCircleRight > : null}
      </div>

      <div style={{display:'flex', flexDirection: 'row', position: 'absolute', bottom: '0px', alignItems: 'center', gap: '3px', margin:'3px'}}>
        {photos.map((photo, index)=>(
          (selectedIndex !== index)? 
            <FaRegCircle color="white"  key={index}  onClick={()=>setSelectedIndex(index)}/>:
            <FaCircle  color="white"  key={index} onClick={()=>setSelectedIndex(index)}/>
          ))}
      </div>

    </DefaultImgWrap>
  )
}
export default ExpandedView;