import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {Input, ImgWrapper, Select, StylesWrapper, StyleName, SubStyleName, Price, SelectImgWrap} from './OverviewStyles.js';

const ProductStyleSelector =({styles, setSelectedIndex, selectedIndex})=> {
    const [quantity, setQuantity] = useState([]);
    const [message, setMessage] =  useState(false);
    const selectedStyle = styles[selectedIndex];
    console.log({selectedStyle});
    const strikethoughStyle= selectedStyle.sale_price? {textDecorationLine: 'line-through'} : {};
    let skus=[];
    for(let key in selectedStyle.skus) {
        let sku = selectedStyle.skus[key]
        if (sku !== 'null'){
            if (sku.quantity > 0) {
                skus.push({id: key, size: sku.size, quantity: sku.quantity})
            }
        }
    }
    console.log(skus);
    
    const selectSize = function(event) {
        if (event.target.value === 'Select Size') {
            setQuantity([]);
        } else {
            let sizeQuantity = Number(event.target.value.split(',')[0]);
            let amount = (sizeQuantity > 15)? 15: sizeQuantity;
            let quantities = Array.from(Array(Number(amount)+1).keys());
            quantities.shift()
            setQuantity(quantities);
        }
    }
    const addToCart = function(event) {
        event.preventDefault();
        if(event.target.elements[0].value === 'Select Size') {
            setMessage(true)
        } else {
            setMessage(false);
            const selectedQuant = event.target.elements[1].value
            const selectedSku = event.target.elements[0].value.split(',')[1]
            API.addToCart({selectedSku, selectedQuant},(err) => {
                if(err) {
                    console.log(err);
                }
            })
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
                return (
                    (selectedIndex === index) ?
                // <SelectImgWrap imgUrl={style.photos[0].thumbnail_url} style={{width: '100%'}} key={index}>
                <SelectImgWrap img={style.photos[0].thumbnail_url} key={index} onClick={()=>setSelectedIndex(index) }>
                <i class="far fa-check-circle fa-lg"/>
                </SelectImgWrap>:
                // <ImgWrapper img={style.photos[0].thumbnail_url} key={index} onClick={()=>setSelectedIndex(index)}/>
                <ImgWrapper src={style.photos[0].thumbnail_url} key={index} onClick={()=>setSelectedIndex(index)}/>
                )
            }): null}
            </StylesWrapper>
            {message? <p>Please select size</p>: null}



            <form onSubmit={addToCart} >

                <Select  style={{width: '60%', marginRight: '1%'}} onChange={selectSize}>
                    {skus.length? <option >Select Size</option> : <option >Out of Stock</option>}
                    {skus.map((sku, index)=>(<option key={index} name={sku.id} value={[sku.quantity, sku.id]} >{sku.size}</option>))}
                </Select>

                <Select style={{width: '39%'}} value={quantity.length? undefined:'-'} >
                    {quantity.length? null: <option disabled={true}>-</option>}
                    {quantity.map((num, index)=>(<option key={index} >{num}</option>))}
                </Select>
                
                {skus.length? <Input type="submit" value="Add to Cart" />: null}
            </form>
            <StylesWrapper>
            <i class="fab fa-facebook-f  fa-lg" />
            <i class="fab fa-twitter fa-lg"></i>
            <i class="fab fa-pinterest  fa-lg"></i>
            </StylesWrapper>
        </div>
    )
}
export default ProductStyleSelector;

<img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="img-responsive"/>