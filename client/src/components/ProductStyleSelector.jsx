import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {Input, ImgWrapper, Select, StylesWrapper, StyleName, SubStyleName, Price} from './OverviewStyles.js';

const ProductStyleSelector =({styles, selectedStyle, setSelectedIndex})=> {
    const [quantity, setQuantity] = useState([]);
    // const [isEnabled, setIsEnabled] = useState(true);
    
    console.log({selectedStyle});
    const strikethoughStyle= selectedStyle.sale_price? {textDecorationLine: 'line-through'} : {};
    let skus=[];
    for(let key in selectedStyle.skus) {
        let sku = selectedStyle.skus[key]
        skus.push({id: key, size: sku.size, quantity: sku.quantity})
    }

    const selectSize = function(event) {
        // console.log({quantity})
        // console.log('event', event.target.value)
        if (event.target.value === 'Select Size') {
            setQuantity([]);
        } else {
            let amount = (event.target.value > 15)? 15: event.target.value;
            let quantities = Array.from(Array(Number(amount)+1).keys());
            quantities.shift()
            setQuantity(quantities);
        }
    }

    return (
        <div>
            <StyleName>
                {selectedStyle.sale_price? <Price style={{color: 'red' }}> ${selectedStyle.sale_price}</Price> :null}
                <Price style={strikethoughStyle}>${selectedStyle.original_price} </Price>
            </StyleName>

            <StyleName> Style: 
                <SubStyleName> {selectedStyle.name}</SubStyleName>
            </StyleName>

            <StylesWrapper>
            {(styles.length > 0)? styles.map((style, index)=>{
                return (<ImgWrapper src={style.photos[0].thumbnail_url} key={index}  onClick={()=>setSelectedIndex(index)}/>)
            }): null}
            </StylesWrapper>
            <form>
                <Select  style={{width: '60%'}} onChange={selectSize}>
                    {skus.length? <option >Select Size</option> : <option >Out of Stock</option>}
                    {skus.map((sku, index)=>(<option key={index} value={sku.quantity} >{sku.size}</option>))}
  
                </Select>
                <Select style={{width: '40%'}} value={quantity.length? null:'-'} >
                    {quantity.length? null: <option disabled={true}>-</option>}
                    {quantity.map((num, index)=>(<option key={index} >{num}</option>))}
                </Select>
                <Input type="submit" value="Add to Cart" />
            </form>
        </div>
    )
}
export default ProductStyleSelector;

<img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="img-responsive"/>