
import React from 'react';
import API from '../../API';
import { useEffect, useState, createContext, useContext } from 'react';
//const config = require('../../../config.js');
import axios from 'axios';
import {UserContext} from './App.jsx';

const Outfit=(props)=> {
  const data=useContext(UserContext);
  console.log('dataaaaa', data.Img);
  //this propos will contain the id of the current overview page
  const [outfits, setOutfits]=useState([]);
  const[ img, setImg]=useState([]);


    return (
      <div>
        <h2>hello Friday</h2>
        <h2>{data.name}</h2>
        {/* <button onClick={(event)=>{ setOutfits(this.props.id); setImg(this.props.imgs)}>+</button>
        <div>{outfits.style.results[0].photos[0].url}</div> */}
     </div>
    )

}
export default Outfit;