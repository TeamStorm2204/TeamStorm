import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';

const ProductView =(props)=> {
  const photos = props.selectedStyle.photos;
  const [selectedIndex, setSelectedIndex] = useState(0);


    return (
        <div style={{display:'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
        <div style={{display:'flex', flexDirection: 'column'}}>
          {photos.map((photo, index)=>(
            (selectedIndex !== index)? <img src={photo.thumbnail_url} key={index} width="100" onClick={()=>setSelectedIndex(index)}/>:null
            ))}
        </div>
          {<img src={photos[selectedIndex].thumbnail_url}/>}
        </div>
    )
}
export default ProductView;