import React from 'react';
import { useEffect, useState } from 'react';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';
import {ThumbImg, BorderThumbImg} from './OverviewStyles.js';

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
    props.setExpanded(true);
      if(e.target.getAttribute('value') === 'magnify') {
      props.setExpanded(true);
      }
  }

    return (
    <div style={{aspectRatio: '3/4',display:'flex', justifyContent:'center', cursor:'zoom-in'}} value="magnify" onClick={expandView}>
        <img src={photos[selectedIndex].url} style={{justifyContent:'center', width:"100%", height:'100%', objectFit:'cover'}}/>
        <div style={{display: 'flex', alignItems: 'center', cursor: 'default'}}>
            {(selectedIndex > 0)? <FaChevronCircleLeft color="white" fontSize="1.5em" style={{ position: 'absolute', left: '2px',}} onClick={mainArrowClick}></FaChevronCircleLeft> : null}
            {(photos.length > (selectedIndex + 1)) ? <FaChevronCircleRight color="white" fontSize="1.5em" style={{ position: 'absolute', right: '2px'}} onClick={()=>{mainArrowClick('left')}}></FaChevronCircleRight > : null}

        </div>

        <div style={{display: 'flex', alignItems: 'end', cursor: 'default' }}>
        <div style={{ display:'flex', flexDirection: 'row', position: 'absolute',left: '0', justifyContent:'space-around', alignItems: 'center', aspectRatio: '8/1'}}>
        {photos.map((photo, index)=>(
            (index >= indexStart && (index <= indexEnd))?
            (selectedIndex !== index)? 
            <ThumbImg src={photo.thumbnail_url} key={index} onClick={()=>setSelectedIndex(index)}/>:
            <BorderThumbImg src={photo.thumbnail_url} key={index} onClick={()=>setSelectedIndex(index)}/>:
            null
            ))}
        {(indexStart > 0)? <FaChevronCircleLeft color="white" style={{ position: 'absolute', left: '2px'}} onClick={rightArrowClick}></FaChevronCircleLeft> : null}
        {(photos.length > (indexEnd + 1))? <FaChevronCircleRight color="white" style={{ position: 'absolute', right: '2px'}} onClick={leftArrowClick}></FaChevronCircleRight > : null}
        </div>
        </div>

        <div style={{display:'flex', flexDirection: 'row', }}>
        </div>
    </div>
    )
}
export default DefaultView;