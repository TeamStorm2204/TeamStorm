import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';

const RelatedProduct =(props)=> {

  const [relatedItems, setRelative]=useState([]);
  useEffect( ()=> {
    API.getRelatedProducts(props.id, (err, data)=> {
      if(err) {
        alert( 'err getting related product');
      }else {
        var relatedInfor=[];
        for (let i=0; i<data.length;i++) {
          API.getProductInformation(data[i], (err,data)=> {
            if(err) {
            console.log(err);
            }else {
              console.log('namememme',data.name);
               relatedInfor.push(data);
               var updte=relatedItem.concat(data);
               setRelative([...relatedItems, updte]);
            }

          })
        }

      }
    })

  }, []);


    return (
      <div>

        {relatedItems.map( (item)=>(

        <div>
        <div>hello</div>
        <div>{item.name}</div>
        <div>{item.default_price}</div>
        </div>
      ))
      }
     </div>
    )

}
export default RelatedProduct;