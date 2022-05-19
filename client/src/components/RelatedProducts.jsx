import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';

const RelatedProduct =(props)=> {

  const [relatedItems, setRelative]=useState([]);
  console.log('any itdddd', props.id);
  useEffect( ()=> {
    API.getRelatedProducts(props.id, (err, data)=> {
      if(err) {
        alert( 'err getting related product');
      }else {
        var relatedInfor=[];
        console.log('waht is the related item id', data);
        for (let i=0; i<data.length;i++) {
          API.getProducts(data[i], (err,data)=> {
            if(err) {
              alert( 'err getting product infor');
            }else {
               relatedInfor.push(data);
            }

          })
        }
        setRelative(data);
      }
    })

  }, []);


    return (
      <div>
      {relatedItems.map( (item)=>(
        <div>
        <div>{item.name}</div>
        <div>{item.default_price}</div>
        </div>
      ))
      }
     </div>
    )

}
export default RelatedProduct;