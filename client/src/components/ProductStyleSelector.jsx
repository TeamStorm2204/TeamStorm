import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';

const ProductStyleSelector =(props)=> {
    const styles = props.styles;
    const selectedStyle = props.selectedStyle
    console.log({styles, selectedStyle});
    const strikethoughStyle= selectedStyle.sale_price? {textDecorationLine: 'line-through'} : {};
    let skus=[];
    for(let key in selectedStyle.skus) {
        let sku = selectedStyle.skus[key]
        skus.push({id: key, size: sku.size, quantity: sku.quantity})
    }
    console.log({skus});
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
                <select>
                    {skus.map((sku)=>(<option key={sku.id} value={sku.id}>{sku.size}</option>))}
                </select>
                <select>
                    <option value="1">1</option>
                </select>
                <input type="submit" value="Add to Cart" />
            </form>
            {(styles.length > 0)? styles.map((style, index)=>{
                return (<div key={index}> {<img src={style.photos[0].thumbnail_url}  width="100" />}</div>)
            }): null}
        </div>

    )
}
export default ProductStyleSelector;

<img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="img-responsive"/>