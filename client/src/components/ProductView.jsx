import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';

const ProductView =(props)=> {
  const photos = props.selectedStyle.photos;
  const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div>
          {<img src={photos[selectedIndex].thumbnail_url}/>}
          {photos.map((photo, index)=>(
            (selectedIndex !== index)? <img src={photo.thumbnail_url}  width="100"/>:null
          ))}
        </div>

    )
}
export default ProductView;