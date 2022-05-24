import React from 'react';
import{useEffect, useState}from 'react';
import api from '../../API';
import {St} from './Styles.styled.js';

const Stars= (props)=> {
  let sum = 0;
  let count =0;
  var id=props.id;
  var avg=0;
  const [star, setStars] = useState(0);
  useEffect(() => {
     api.getReviewsMeta({product_id: id}, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        for(let key in data.ratings) {
          sum+=Number(data.ratings[key])*Number(key);
          count += Number(data.ratings[key])
        }
        avg =sum/count;
        setStars(avg);

      }
    })
  }, []);



return(
  <div style={{display: 'inline-block'}}>

   {star>0? <St average={Math.floor(star * 2) / 2}>★★★★★</St>:null}
  </div>
)
}
export default Stars;
