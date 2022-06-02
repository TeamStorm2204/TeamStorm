import React from 'react';
import API from '../../../API';
import { useEffect, useState } from 'react';
import {FaChevronCircleLeft, FaChevronCircleRight, FaCircle, FaRegCircle, FaCompress} from 'react-icons/fa';
import {} from './DefaultView.jsx';
import Zoom from 'react-img-zoom'

const ExpandedView =(props)=> {
  const photos = props.selectedStyle.photos.concat(props.selectedStyle.photos);
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
    console.log('hit', (e.target.getAttribute('value')))
    if(e.target.getAttribute('value') === 'magnify') {
        setZoomMode(!zoomMode);
    }
  }

  return (
    zoomMode?
    <div style={{display: 'flex', justifyContent:'center', cursor:'zoom-out'}} value="magnify" onClick={()=>{setZoomMode(!zoomMode)}}>
    <Zoom
    img={photos[selectedIndex].url}
    zoomScale={2.5}
    width={600}
    height={600}
    />
    </div>
    :

    <div style={{display: 'flex', justifyContent:'center', minWidth: '300px', cursor:'zoom-in'}} value="magnify" onClick={magnify}>

      <img src={photos[selectedIndex].url} style={{width:"auto", height:'100%', maxHeight:'700px', objectFit:'contain' }} value="magnify"/>

      <div style={{position:'relative', display: 'flex', cursor: 'default'}}>
        <FaCompress color="black" fontSize="1.5em" style={{ position: 'absolute', right: '2px'}} onClick={contract}></FaCompress>
        {(photos.length > (selectedIndex + 1)) ? <FaChevronCircleRight color="black" fontSize="1.5em" style={{ position: 'absolute', top: '50%', right: '2px'}} onClick={()=>{mainRightArrowClick('left')}}></FaChevronCircleRight > : null}
      </div>

      <div style={{position:'relative'}}>
      <div style={{position:'absolute', display: 'flex', top: '50%', cursor: 'default', 'left': '2px'}}>
        {(selectedIndex > 0)? <FaChevronCircleLeft color="black" fontSize="1.5em"  onClick={mainRightArrowClick}></FaChevronCircleLeft> : null}
      </div>
      
      </div>

      <div style={{position:'absolute', left:'0', bottom: '2px'}}>
      <div style={{display:'flex', position: 'relative', width: '100%', bottom: '2px', gap: '3px', margin:'3px', cursor: 'default'}}>
      {photos.map((photo, index)=>(
          (selectedIndex !== index)? 
          <FaRegCircle color="black"  key={index}  onClick={()=>setSelectedIndex(index)}/>:
          <FaCircle  color="black"  key={index} onClick={()=>setSelectedIndex(index)}/>
          ))}
      </div>
      </div>

      </div>
    

  )
}
export default ExpandedView;
