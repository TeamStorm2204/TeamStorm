import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Header = styled.h1`
    color: var(--text-dark);
    font: 100 2.2rem/1.4 Helvetica,Arial,sans-serif;
    letter-spacing: .05rem;
    margin-bottom: 5px;
  `
export const SubHeader = styled.div`
    color: var(--text-light);
    font: 100 1.0rem/1.2 Helvetica,Arial,sans-serif;
    letter-spacing: .05rem;
    margin: 5px 0 5px 0;
`
export const StyleName = styled.div`
  color: var(--text-dark);
  display: in-line
  letter-spacing: .05rem;
  margin-bottom: 5px;
  font: 700 1.2rem/1.4 Helvetica,Arial,sans-serif;
  letter-spacing: .05rem;
`;


export const SubStyleName = styled.span`
  color: var(--text-medium);
  font: 1.2rem/normal Helvetica,Arial,sans-serif;
  letter-spacing: .05rem;
`;

export const Price = styled.span`
  color: var(--text-medium);
  font: 1.2rem/normal Helvetica,Arial,sans-serif;
  letter-spacing: .05rem;
  padding-right: 5px;
`;
export const StylesWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 5px;
  margin-bottom: 5px;
`;
// export const ImgWrapper = styled.div`
//   min-width: 23%;
//   max-width: 69px;
//   background-image: url(${props => props.img});
//   background-size: cover;
// `;

export const ImgWrapper = styled.img`
  min-width: 23%;
  max-width: 69px;
`;

export const ThumbImg = styled.img`
  width: 50px;
  margin: 1px;
  padding: 3px;
`;

export const Arrow = styled.button`
  margin: 30px 0 30px 0;
  padding: 10px 0 10px 0;
`;

export const BorderThumbImg = styled.img`
  width: 50px;
  margin: 1px;
  padding: 3px;
  border: 2px solid black;
`;

export const DefaultImgWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  min-width: 450px;
  width: auto;
  min-height: 675px;
  background-color: lightGray;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
`

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
`
export const SelectImgWrap = styled.div`
  box-sizing: border-box;
  min-width: 23%;
  max-width: 69px;
  border: 2px solid black;
  background-image: url(${props => props.img});
  background-size: cover;
  `
export const CheckMark = styled.div`
  max-width: 19px;
  background-color: white;
  border-radius: 11px;
`;


export const Select = styled.select`
    background-color: #fff;
    border: 2px solid #707070;
    border-radius: 5px;
    color: #222;
    height: 40px;
    letter-spacing: .02rem;
    padding: 0 10px 0 10px;
    margin-bottom: 5px;
`

export const Input = styled.input`
    background-color: black;
    border: none;
    color: white;
    padding: 15px 40px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    width: 100%;
`

export const ProductDetailsContainer = styled.div`
    position: relative;
    min-width: 350px;
    max-width: 450px;
  `
  
export const GlobalStyle = createGlobalStyle`
   body {
    display: flex;
    margin: 0;
    padding: 100px;
    background: #f5f5f5;
    font - family: sans-serif;
    flex-direction: column;
  }
`
