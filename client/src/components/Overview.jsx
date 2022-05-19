
import React from 'react';
import API from '../../API';
import { useEffect, useState } from 'react';
import ProductInformation from './ProductInformation.jsx';

const Overview =(props)=> {
    return (
        <div>
            <ProductInformation id={props.id}></ProductInformation>
        </div>
    )
}
export default Overview;