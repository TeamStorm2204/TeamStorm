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

// export const SelectImgWrap = styled.div`
//   min-width: 23%;
//   max-width: 69px;
//   border: 2px solid #707070;
//   `
export const SelectImgWrap = styled.div`
  box-sizing: border-box;
  min-width: 23%;
  max-width: 69px;
  border: 2px solid black;
  background-image: url(${props => props.img});
  background-size: cover;
  justify-content: right;
  `
export const CheckMark = styled.div`
  max-width: 20px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  top: 2px;
  font-size: 16px;
  justify-content:center;
  // src: url(${props => props.img});
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
    min-width: 150px;
    max-width: 350px;
    padding: 20px;
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
