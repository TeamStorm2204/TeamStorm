import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {Input, ImgWrapper, Select, StylesWrapper, StyleName, SubStyleName, Price} from './OverviewStyles.js';

const ProductStyleSelector =({styles, selectedStyle, setSelectedIndex})=> {
    const [quantity, setQuantity] = useState([]);
    const [inStock, setInStock] = useState(false);
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
        let amount = (event.target.value > 15)? 15: event.target.value;
        let quantities = Array.from(Array(Number(amount)+1).keys());
        quantities.shift()
        setQuantity(quantities);
    }
    return (
        <div>
            <StyleName>
                <Price style={strikethoughStyle}>${selectedStyle.original_price} </Price>
                {selectedStyle.sale_price? <Price style={{color: 'red' }}> ${selectedStyle.sale_price}</Price> :null}
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
                    <option >Select Size</option>
                    {skus.map((sku, index)=>(<option key={index} value={sku.quantity} >{sku.size}</option>))}
                    {inStock?  <option >Out of Stock</option>: null}
  
                </Select>
                <Select style={{width: '40%'}} value={'-'}>
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