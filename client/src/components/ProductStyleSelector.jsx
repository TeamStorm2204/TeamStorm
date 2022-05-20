import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';

const ProductStyleSelector =({styles, selectedStyle, setSelectedIndex})=> {
    const [quantity, setQuantity] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    
    console.log({selectedStyle});
    const strikethoughStyle= selectedStyle.sale_price? {textDecorationLine: 'line-through'} : {};
    let skus=[];
    for(let key in selectedStyle.skus) {
        let sku = selectedStyle.skus[key]
        skus.push({id: key, size: sku.size, quantity: sku.quantity})
    }

    const selectSize = function(event) {
        console.log({quantity})
        console.log('event', event.target.value)
        let quantities = Array.from(Array(Number(event.target.value)+1).keys());
        quantities.shift()
        if(quantities.length > 15) {
            quantities = quantities.slice(0, 15);
        }
        setQuantity(quantities);
    }
    return (
        <div>
            <div>
                <h3 style={strikethoughStyle}>${selectedStyle.original_price}</h3>
                {selectedStyle.sale_price? <h3 style={{color: 'red' }}>${selectedStyle.sale_price}</h3> :null}
            </div>
            <div>
                <h4>Style: </h4>
                <h4>{selectedStyle.name}</h4>
            </div>

            <form>
                <select  onChange={selectSize}>
                    <option value={'-'} >Select Size</option>
                    {skus.map((sku, index)=>(<option key={index} value={sku.quantity} >{sku.size}</option>))}
                </select>
                <select>
                    {quantity.map((num, index)=>(<option key={index} >{num}</option>))}
                </select>
                <input type="submit" value="Add to Cart" />
            </form>

            {(styles.length > 0)? styles.map((style, index)=>{
                return (<img src={style.photos[0].thumbnail_url}  width="100" key={index} value={index} onClick={()=>setSelectedIndex(index)}/>)
            }): null}
        </div>

    )
}
export default ProductStyleSelector;

<img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="img-responsive"/>