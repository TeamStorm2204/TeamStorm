import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


  export const Card =styled.div`
  background-image: url(${(props) => props.url});
  border-radius: 10px 10px 0 0;
  display:felx;
  position:relative;
  width:100%;
  height:60%;
  z-index: 1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
   `

   export const CardFit =styled.div`
   background-image: url(${(props) => props.url});
   border-radius: 10px 10px 0 0;
   display:felx;
   position:relative;
   width:100%;
   height:65%;
   z-index: 1;
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
    `

    export const OutCard =styled.div`
    flex-direction:row;
    justify-content:space-between;
    border-radius: 10px;
    height: 250px;
    width: 200px;
    border: 2px solid black;
    float:left;
    &:hover {
     box-shadow: 2.5px 2.5px black;
   }
   `
   export const OutCardFit =styled.div`
   flex-direction:row;
   justify-content:space-between;
   border-radius: 10px;
   height: 250px;
   width: 200px;
   border: 2px solid black;
   float:left;
   &:hover {
    height: 255px;
    width: 215px;
  }
  `

   export const Description=styled.div`
   position: relative;
   display:flex;
   justify-content:space-between;
   font: 100 1.2rem/1.4 Helvetica,Arial,sans-serif;
   padding-left:5px;
   padding-right:5px;

   `
   export const Title=styled.div`
   display:flex;
   justify-content: center;
   font: 100 1.5rem/1.4 Helvetica,Arial,sans-serif;
   font-weight:bold;
   padding-top:30px;

   `

   export const Icon =styled.div`
    position: absolute;
    top: 10px;
    left: 85%;
    z-index: 10;
    width: 12px !important;
    height: 12px !important;
    `
  export const Space=styled.div`
   display: inline-block;
   width: 600px;
   padding:50px;

  `
  export const Add=styled.div`
   top:40%;
   left:35%;
   display:felx;
   position:relative;
   width:100%;
   height:50%;
   z-index: 1;

  `
 export const PlusButton=styled.div `
 z-index:3;
 &:hover{
  cursor: pointer
}
 `
  export const Cross =styled.button`
  background-color:rgba(255,255,255,.45);
  border:none;
  &:hover {
   cursor: pointer;
   color:red;
 }
  position: absolute;
  top: 10px;
  right:80%;
  z-index: 1;
  width: 25px !important;
  height: 15px !important;

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
   width:80%;
   margin: 0 auto;
   padding-left:25px;
   padding-right:25px;
   display: flex;
   height: 300px;
   justify-content: space-around;
   overflow: hidden;
   position: relative;
   `

   export const Images =styled.div`
   margin-left:100px;
   margin-top: 60px;
   border-radius:10px;
   `

   export const StarButton=styled.div`
   background-color:rgba(255,255,255,.45);
   z-index:10;
   width:23px;
   height:23px;
   border-radius: 50% ;
   &:hover {
    cursor: pointer;
    color: pink;
  }
   `
   export const RightArrow =styled.div`
   position:absolute;
   top:50%;
   right:45px;
   font-size:2em;
   z-index:10;
   cursor:pointer;
   user-select:none;
   &:hover {
    cursor: pointer;
    font-size:2.1em;
  }

   `
   export const LeftArrow =styled.div`

   position:absolute;
   top:50%;
   left:45px;
   font-size:2em;
   z-index:10;
   cursor:pointer;
   user-select:none;
   &:hover {
    cursor: pointer;
    font-size:2.1em;
  }

   `

   export const RightArrowSub =styled.div`

   position:absolute;
   padding-right:300px;
   color:white;
   top:85%;
   right:2px;
   font-size:em;
   z-index:10;
   cursor:pointer;
   user-select:none;

   `
   export const LeftArrowSub =styled.div`
   position:absolute;
   top:85%;
   color:white;
   left:2px;
   font-size:em;
   z-index:10;
   cursor:pointer;
   user-select:none;

   `
   export const  Container=styled.div`
   overflow-y: auto;
   width:210px;
   height:180px;
   font-size:12px;
   z-index:20;
   top:60%;
   background-color:white;
   box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
   display:flex;
   position:absolute;
   padding:15px;

   margin-left:800px;`


   export const CloseButton=styled.button`
   border-radius: 10px 10px 10px 10px ;
   border: 1px solid rgba(0,0,0,1);
   margin: 20px;
   font-style: Helvetica,Arial,sans-serif;
   font-size:12px;
   background-color:transparent;
   display:flex;
   &:hover {
    cursor: pointer;
    border: 2.5px solid black;
  }
   position: absolute;
   top: 85%;
   left:35%;
   z-index: 1;

   `


   export const XfeatureL = styled.td`
    position: flex;
    text-align: center;
    font-style: Helvetica,Arial,sans-serif;
    font-size: 10px;

    `;

    export const XfeatureR = styled.td`
    position: flex;
    text-align: center;
    font-style: Helvetica,Arial,sans-serif;
    font-size: 10px;

    `;

    export const Value = styled.td`
    text-align: center;
    fotn-size:10px;

    `;

    export const HeadL = styled.th`
    padding-left: 5px;


    `;

    export const HeadR = styled.th`
      padding-right: 5px;


      `;


