import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const ReadMore = styled.div`
font-size: 13px;
   text-decoration:underline;
    color: #8a8a8a;
&:hover {
    color:blue;
    cursor: pointer;
  }
`
export const AddImg = styled.label`
    cursor: pointer;
    background-color: white;
    border: 2px solid rgb(118, 118, 118);
    color: black;
    padding: 15px 30px;
    border-radius: 7px;
    text-align: center;
    display: inline-block;
    font-family : Helvetica,Arial,sans-serif;
    font-size: 13px;
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
    &:hover {
      background-color: black;
    color: white;
      box-shadow: 0 5px 3px 0 rgba(0,0,0,0.2);
    }
`

export const FilterRate = styled.div`
  text-decoration: underline;
  width: 100%;
  padding: 10px;
  padding-left:-10px;
  align-items: center;
  display: flex;
  font-weight: 500;
  font-size: 16px;
  color: #4f4e4e;
  margin-top:-10px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background:rgba(0, 0, 0, 0.08);
  }
`
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
display: grid;
  grid-template-columns: 25% 25% 25% 25%;
cursor:default;
    width: 80%;
    max-width: 80%;
    margin: 0 auto;
align-items: baseline;
    font-family: Helvetica,Arial,sans-serif
  `
export const SubHeader = styled.div`
cursor:default;
    display: grid;
  grid-template-columns: 25% 25% 25% 25%;
    width: 80%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: -10px;
    font-size: 20px;
    font-family: Helvetica,Arial,sans-serif
  `
export const PrimaryButton = styled.button`
cursor: pointer;
    background-color: white;
    border: none;
    color: black;
    padding: 15px 50px;
    border-radius: 7px;
    text-align: center;
    display: inline-block;
    font-family : Helvetica,Arial,sans-serif
    font-size: 14px;
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    &:hover {
      box-shadow: 0 5px 3px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
  `
export const StyledButton = styled.button`
cursor: pointer;
    background-color: black;
    border: none;
    color: white;
    padding: 15px 50px;
    border-radius: 7px;
    text-align: center;
    display: inline-block;
    font-family : Helvetica,Arial,sans-serif
    font-size: 15px;
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    &:hover {
      box-shadow: 0 5px 3px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
  `
export const Body = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;
    width: 80%;
    max-width: 80%;
    margin: 0 auto;
    font-size: 20px;
    font-family : Helvetica,Arial,sans-serif;
    padding-bottom:100px;

  `
export const Ratings = styled.div`
    display: flex;
    justify-content: space-around;
    width: 25%;
    max-width: 25%;
    padding: 0px;
    font-size: 20px;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    font-family : Helvetica,Arial,sans-serif

  `
export const ReviewsList = styled.div`
box-sizing: content-box;
    width: 100%;
  `

export const Yes = styled.div`
font-size: 13px;
   text-decoration:underline;
    color: #8a8a8a;
&:hover {
    color:green;
    cursor: pointer;
  }
  `
export const Report = styled.div`
font-size: 13px;
   text-decoration:underline;
    color: #8a8a8a;
&:hover {
    color:red;
    cursor: pointer;
  }
  `

export const Review = styled.div`
cursor:default;
    box-sizing: content-box;
    width: 95%;
    margin-right:10px;
    margin-top:15px;
    margin-bottom:5px;
    padding:25px;
    background:white;
    box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.2);
  `
export const Star = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right:30px
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
  direction:rtl;
  /* the hidden clearer */
}
.star-cb-group * {
  font-size: 1.8rem;
}
.star-cb-group > input {
  display: none;
}
.star-cb-group > input + label {
  /* only enough room for the star */
  display: inline-block;
  overflow: hidden;

  width: 1em;
  white-space: nowrap;
  cursor: pointer;
}
.star-cb-group > input + label:before {
  display: inline-block;

  content: "☆";
  color: #888;
}
.star-cb-group > input:checked ~ label:before, .star-cb-group > input + label:hover ~ label:before, .star-cb-group > input + label:hover:before {
  content: "★";
  color: #FDCC0D;
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
  color: #FDCC0D;
  text-shadow: 0 0 1px #333;
}
  `
export const ProgressBar = styled.div`
  background-color: #FDCC0D;
  width: ${(props) => props.percentNum}%;
  height: 5px;
`
export const RangeSlider = styled.div`
  .slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
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
    height: 500px;
    overflow-y: scroll;
    position: relative;
    box-shadow: inset 1px 1px 10px #d1d1d1;
    &:: -webkit - scrollbar {
      -webkit-appearance: auto;
      width: 20px;
      border: 1px solid #d8d8d8;
    }
`

export const InputBox = styled.input.attrs({ type: 'text' })`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid rgb(118, 118, 118);
  &:focus {
    outline:none;
    border: 2px solid rgb(118, 118, 118);
    box-shadow: 0 3px 5px rgba(0,0,0,0.50);
    transition: box-shadow 0.3s ease-in-out;
  }
  border-radius:10px;
`
export const TextBox = styled.textarea`
  margin-top:10px;
  padding: 12px 20px;
  border-radius: 10px;
  width: 100%;
  height: 100px;
  border: 1px solid rgb(118, 118, 118);
  &:focus {
    outline:none;
    border: 2px solid rgb(118, 118, 118);
    box-shadow: 0 3px 5px rgba(0,0,0,0.50);
    transition: box-shadow 0.3s ease-in-out;
  }
`
export const InputEmail = styled.input.attrs({ type: 'email' })`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius:10px;
  border: 1px solid rgb(118, 118, 118);
  &:focus {
    outline:none;
    border: 2px solid rgb(118, 118, 118);
    box-shadow: 0 3px 5px rgba(0,0,0,0.50);
    transition: box-shadow 0.3s ease-in-out;
  }
`
export const RadioButton = styled.input.attrs({ type: 'radio' })`
  width: 1.15em;
  height: 1.15em;
`
export const DrpItem = styled.p`
    width: 150px;
    height: 20px;
    padding-top:10px;
    padding:20px 20px;
    border-bottom: 1px solid grey;
    font-size:13px;
    margin:0px;
    &:hover {
      cursor: pointer;
      background:rgba(0, 0, 0, 0.08);
  }
`
export const Dropdown = styled.div`
    textDecoration: 'underline';
    display: inline-block;
`
export const DropdownMenu = styled.div`
  display: ${(props) => props.dis ? 'block' : 'none'};
  position: absolute;
  border: 1px solid rgb(118, 118, 118);
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
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
    background: #fafafa;
    font - family: sans-serif;
    flex-direction: column;
  }
`

//export styles;