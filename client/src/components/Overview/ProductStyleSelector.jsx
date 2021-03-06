import React from 'react';
import API from '../../../API';
import {useState } from 'react';
import {FaCheckCircle, FaFacebookF, FaTwitter, FaPinterest} from 'react-icons/fa';
import {Input, ImgWrapper, Select, StylesWrapper, StyleName, SubStyleName, Price, SelectImgWrapper} from './OverviewStyles.js';

const ProductStyleSelector =({styles, setSelectedIndex, selectedIndex})=> {
    const [quantity, setQuantity] = useState([]);
    const [message, setMessage] =  useState(false);
    const selectedStyle = styles[selectedIndex];
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
                {selectedStyle.sale_price?
                <Price style={{color: 'red'}}> ${selectedStyle.sale_price}</Price>
                :null}
                <Price style={strikethoughStyle}>${selectedStyle.original_price}</Price>
            </StyleName>
            <hr style={{width: '100%', height: '1px', margin: '20px 0 10px 0', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}/>
            <StyleName> 
                Style:  
                <SubStyleName>{selectedStyle.name}</SubStyleName>
            </StyleName>

            <StylesWrapper>
            {(styles.length > 0)? styles.map((style, index)=>{
                return (
                    (selectedIndex === index) ?
                    <SelectImgWrapper src={style.photos[0].thumbnail_url} key={index}/>:
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
                <FaFacebookF fontSize="1.25em"/>
                <FaTwitter fontSize="1.25em"/>
                <FaPinterest fontSize="1.25em"/>
            </StylesWrapper>
        </div>
    )
}
export default ProductStyleSelector;