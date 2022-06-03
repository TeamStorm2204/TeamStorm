import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Header = styled.h1`
    color: var(--text-dark);
    font: 100 2.2rem/1.3 Helvetica,Arial,sans-serif;
    letter-spacing: .05rem;
    margin-bottom: 5px;
    margin-top: 10px
  `
export const SubHeader = styled.div`
    color: var(--text-light);
    font: 100 1.0rem/1.2 Helvetica,Arial,sans-serif;
    letter-spacing: .05rem;
    margin: 5px 0 5px 0;
`

export const LeftArrow = styled.div`
  font-size: 1.5em;
  color: white;  
  position: absolute; 
  left: 2px;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`
export const RightArrow = styled.div`
  font-size: 1.5em;
  color: white;
  position: absolute; 
  right: 2px;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`
export const  Reviews = styled.div`
  display: inline;
  font: 20 0.8rem/1.0 Helvetica,Arial,sans-serif;
  letter-spacing: .05rem;
  margin: 5px 2px 5px 0;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }  
`
export const StyleName = styled.div`
  letter-spacing: .05rem;
  margin: 10px 0 10px 0;
  font: 20 1.3rem/normal Helvetica,Arial,sans-serif;
  letter-spacing: .05rem;
`;

export const SubStyleName = styled.span`
  font: 60 1.3rem/normal Helvetica,Arial,sans-serif;
  letter-spacing: .05rem;
  padding-left: 3px;
`;

export const Price = styled.span`
  font: 50 1.3rem/normal Helvetica,Arial,sans-serif;
  letter-spacing: .05rem;
  padding-right: 5px;
`;
export const StylesWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  max-width: 450px;
`;

export const ImgWrapper = styled.img`
  min-width: 20%;
  margin: 0 10px 10px 0;
  max-width: 68px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 5px;
  border-color: #4a4949;
  &:hover {
    margin: 0 6px 6px 0;
    opacity: 0.8;
    border: 2px solid #4a4949;
  }
`;

export const SelectImgWrap = styled.div`
box-sizing: border-box;
margin: 0 10px 10px 0;
min-width: 20%;
max-width: 68px;
aspect-ratio: 1/1;
border-radius: 5px;
border: 2px solid #4a4949;
background-image: url(${props => props.img});
background-size: cover;
background-position-y: center;
background-position-x: center;
`;

export const ThumbImg = styled.img`
  width: 9%;
  aspect-ratio: 1/1;
  margin: 4px;
  object-fit: cover;
  border-radius: 1px;
  border: 1px;
  &:hover {
    opacity: 0.7;
    border: 1px solid white;
  }
`;
export const BorderThumbImg = styled.img`
  width: 9%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid white;
`;

export const DefaultImgWrap = styled.div`
//   position: relative;
  box-sizing: border-box;
  width:90%
//   min-width: 45px;
  min-width: 100%;
//   min-height: 675;
//   height: (width * 1.5);
//   max-height: auto;
  min-height: calc(70vw);
  background-color: lightGray;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
`;

export const ImagesWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  min-width: 75px;
  width: auto;
  min-height: 50px;
  background-color: lightGray;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
`;



export const Select = styled.select`
    background-color: #fff;
    border: 2px solid #707070;
    border-radius: 5px;
    color: #222;
    height: 40px;
    letter-spacing: .02rem;
    padding: 0 10px 0 10px;
    margin: 15px 0 15px 0;
`;

export const Input = styled.input`
    background-color: black;
    border: none;
    color: white;
    padding: 15px 40px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    width: 100%;
    margin-bottom: 10px;
    &:hover {
      opacity: 0.8;
    }
`;

export const ProductDetailsContainer = styled.div`
    position: relative;
    min-width: 250px;
    max-width: 540px;
    // justifyContent:center;
    flex-basis: 250px;
    flex-grow: 1;
    flex-shrink: 1;
  `;
