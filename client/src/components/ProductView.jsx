import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {DefaultImgWrap, SelectImgWrap} from './OverviewStyles.js';

const ProductView =(props)=> {
  const photos = props.selectedStyle.photos;
  const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        // <div style={{backgroundColor:'pink',  minWidth:'100%'}}>
        //   hellofddddddddddddsfsadasfdasfdsafasd hellofddddddddddddsfsadasfdasfdsafasd
        // <DefaultImgWrap img={photos[selectedIndex].thumbnail_url}> </DefaultImgWrap>
        // </div>
          <DefaultImgWrap img={photos[selectedIndex].url}>
          <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
            {photos.map((photo, index)=>(
              (selectedIndex !== index)? <img src={photo.thumbnail_url} key={index} width="50px" style={{margin: '1px', padding:"3px", bottom: '0px'}} onClick={()=>setSelectedIndex(index)}/>:
              <img src={photo.thumbnail_url} key={index} width="50px" style={{margin: '1px', padding:"3px", border: '2px solid black'}} onClick={()=>setSelectedIndex(index)}/>
              ))}
          </div>
          </DefaultImgWrap>

    )
}
export default ProductView;