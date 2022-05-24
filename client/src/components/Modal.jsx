import React from 'react';
import {useState} from 'react';
import { Container, Close, CloseButton } from './StyleRelated.js';



const Modal =({closeModal})=> {


return (



  <Container>

    <Close>
    <CloseButton onClick={()=>closeModal(false)}> X </CloseButton>
    </Close>
    <div>
      <h1> title Are you still here?</h1>
    </div>
    <div>
      <p>body Next page is nice</p>
    </div>

</Container>



)
}
export default Modal;


