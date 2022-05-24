import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Modal = styled.div`
  display: ${(props) => props.dis[0]};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  `
export const ModalContent = styled.div`
    background-color: #fefefe;
  margin: 2% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  padding-bottom:20px;
  `
export const Close = styled.span`
display:flex;
    color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
      color:red;
    }
  `
export const Header = styled.div`
    display: flex;
    background-color:#e3d5d5;
    justify-content: space-between;
    width: 90%;
    max-width: 90%;
    padding-left: 25px;
    padding-right: 25px;
    margin: 0 auto;
    align-items: center;
  `
export const SubHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 90%;
    padding-left: 25px;
    padding-right: 25px;
    margin: 0 auto;
    font-size: 20px;
    align-items: center;
  `
export const PrimaryButton = styled.button`
    background-color: white;
    border: none;
    color: black;
    padding: 15px 40px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    &:hover {
      box-shadow: 0 5px 3px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
  `
export const StyledButton = styled.button`
    background-color: black;
    border: none;
    color: white;
    padding: 15px 40px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.19);
    &:hover {
      box-shadow: 0 5px 3px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
  `
export const Body = styled.div`
    background-color:${({ theme }) => theme.colors.body};
    display: flex;
    justify-content: flex-start;
    width: 95%;
    max-width: 95%;
    padding-left: 25px;
    padding-right: 25px;
    margin: 0 auto;
    font-size: 20px;
    align-items: flex-start;
  `
export const Ratings = styled.div`
    display: flex;
    justify-content: space-around;
    width: 35%;
    max-width: 35%;
    padding: 0px;
    margin-left: 10px;
    font-size: 20px;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
  `
export const ReviewsList = styled.div`
    box-sizing: content-box;
    width: 100%;
  `
export const Review = styled.div`
    box-sizing: content-box;
    width: 95%;
    margin-right:10px;
    margin-top:5px;
    margin-bottom:5px;
    padding:25px;
    border-bottom: 1px solid grey;
  `
export const Stars = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `
export const St = styled.div`
    background: linear-gradient(90deg, #FDCC0D 0 ${(props) => props.average / 5 * 100}%, grey ${(props) => props.average / 5 * 100}% 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `
export const InteractiveStars = styled.div`
.star-cb-group {
  /* remove inline-block whitespace */
  font-size: 0;
  /* flip the order so we can use the + and ~ combinators */
  unicode-bidi: bidi-override;
  direction: rtl;
  /* the hidden clearer */
}
.star-cb-group * {
  font-size: 1rem;
}
.star-cb-group > input {
  display: none;
}
.star-cb-group > input + label {
  /* only enough room for the star */
  display: inline-block;
  overflow: hidden;
  text-indent: 9999px;
  width: 1em;
  white-space: nowrap;
  cursor: pointer;
}
.star-cb-group > input + label:before {
  display: inline-block;
  text-indent: -9999px;
  content: "☆";
  color: #888;
}
.star-cb-group > input:checked ~ label:before, .star-cb-group > input + label:hover ~ label:before, .star-cb-group > input + label:hover:before {
  content: "★";
  color: #e52;
  text-shadow: 0 0 1px #333;
}
.star-cb-group > .star-cb-clear + label {
  text-indent: -9999px;
  width: .5em;
  margin-left: -.5em;
}
.star-cb-group > .star-cb-clear + label:before {
  width: .5em;
}
.star-cb-group:hover > input + label:before {
  content: "☆";
  color: #888;
  text-shadow: none;
}
.star-cb-group:hover > input + label:hover ~ label:before, .star-cb-group:hover > input + label:hover:before {
  content: "★";
  color: #e52;
  text-shadow: 0 0 1px #333;
}
  `
export const ProgressBar = styled.div`
  background-color: #FDCC0D;
  width: ${(props) => props.percentNum}%;
  height: 7px;
`
export const RangeSlider = styled.div`
  .slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 7px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 7px;
  height: 15px;
  background: black;
}
`
export const Scrollbar = styled.div`
    width: 100%;
    height: 500px;
    overflow: scroll;
    position: relative;
    box-shadow: inset 1px 1px 10px #d1d1d1;
    &:: -webkit - scrollbar {
      -webkit-appearance: auto;
      width: 20px;
      border: 1px solid #d8d8d8;
    }
`
export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
`
export const InputBox = styled.input.attrs({ type: 'text' })`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`
export const InputEmail = styled.input.attrs({ type: 'email' })`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`
export const RadioButton = styled.input.attrs({ type: 'radio' })`
  width: 1.15em;
  height: 1.15em;
`
export const DrpItem = styled.p`
    width: 170px;
    height: 20px;
    padding-bottom:10px;
    border-bottom: 1px solid grey;

`
export const Dropdown = styled.div`
    textDecoration: 'underline';
    display: inline-block;
    &:hover ${DropdownMenu} {
      display: block;
    }
`
export const RatingCheck = styled.div`
    display: flex;
    width: 80 %;
    margin - right: 30px;
    flex - direction: row;
`
export const SearchBar = styled.div`
    background - color: #ffffff;
    box - sizing: content - box;
    width: 80 %;
    margin - right: 20px;
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

//export styles;