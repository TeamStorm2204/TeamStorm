import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


  export const Card =styled.div`
  position:relative;

  transition: 0.3s;
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:250px;
  height:240px;
  margin-top: 5px;
  margin-left:100px;
  z-index: 1;

   `

   export const Description=styled.div`
   position: absolute;
   display:flex;
   margin-left: 100px;
   `


   export const Icon =styled.div`
    position: absolute;
    top: 0;
    left: 85%;
    z-index: 10;
    width: 12px !important;
    height: 12px !important;
    `
  export const Fit=styled.div`
  margin:0;
  padding:0;
  height:100px;
  `
  export const Space=styled.div`
   display: inline-block;
   width: 600px;
   padding:50px;

  `
  export const Add=styled.div`
  display:inline-block;
  width:100px;
  padding:50px`

  export const Cross =styled.div`
  position: absolute;
  top: 10px;
  right:80%;
  z-index: 1;
  width: 5px !important;
  height: 5px !important;
  `

  export const Cd =styled.div`
  position:relative;
  transition: 0.3s;
  display:flex;
  justify-content:center;
  align-items:center;
  width:220px;
  height:200px;
  margin-bottom: 10px;
   `
   export const Slide =styled.div`
   postion:relative;
   height:60vh;
   display:flex;
   width:250px;
   height:280px;
   justify-content:center;
   aligh-items:center;
   margin-left:300px;
   `

   export const Images =styled.div`
   margin-left:100px;
   margin-top: 60px;
   border-radius:10px;

   `
   export const RightArrow =styled.div`
   position:absolute;
   top:60%;
   right:400px;
   font-size:2em;
   z-index:10;
   cursor:pointer;
   user-select:none;

   `
   export const LeftArrow =styled.div`
   position:absolute;
   top:60%;
   left:32px;
   font-size:2em;
   z-index:10;
   cursor:pointer;
   user-select:none;

   `
   export const  Container=styled.div`
   width:1000px;
   height:300px;
   border-radius:12px;
   border:3px solid red;
   background-color:white;
   box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
   display:flex;

   padding:25px;

   `
   export const Close=styled.div`
   display:flex;
   justify-content:flex-end;
   `
   export const CloseButton=styled.div`
   background-color:transparent;
   border:none;
   fort-size:10px;
   cursor:pointer;
   `
