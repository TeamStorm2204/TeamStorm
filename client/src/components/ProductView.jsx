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
            (selectedIndex !== index)? <div  key={index}><img src={photo.thumbnail_url} width="100"/></div>:null
            ))}
        </div>
          {<img src={photos[selectedIndex].thumbnail_url}/>}
        </div>
    )
}
export default ProductView;