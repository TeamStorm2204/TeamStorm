import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Header = styled.div`
    display: flex;
    background-color:${({ theme }) => theme.colors.header};
    justify-content: space-between;
    width: 90%;
    max-width: 90%;
    padding-left: 25px;
    padding-right: 25px;
    margin: 0 auto;
    font-size: 20px;
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
export const StyledButton = styled.button`
    background-color: black;
    border: none;
    color: white;
    padding: 15px 40px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  `
export const Body = styled.div`
    background-color:${({ theme }) => theme.colors.body};
    display: flex;
    justify-content: flex-start;
    width: 90%;
    max-width: 90%;
    padding-left: 25px;
    padding-right: 25px;
    margin: 0 auto;
    font-size: 20px;
    align-items: flex-start;
  `
export const Ratings = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30%;
    max-width: 30%;
    padding: 0px;
    margin: 0px;
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
    background-color: #ffffff;
    box-sizing: content-box;
    width: 90%;
    margin-right:25px;
    margin-top:5px;
    margin-bottom:5px;
    padding:25px;
  `
export const RatingCheck = styled.div`
    display: flex;
    background-color: #ffffff;
    box-sizing: content-box;
    width: 70%;
    margin-right:30px;
    padding:15px;
    flex-direction: column;
  `
export const SearchBar = styled.div`
    background-color: #ffffff;
    box-sizing: content-box;
    width: 80%;
    margin-right:20px;
  `
export const Popup = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  `
// export const PopupContent = styled.div`
//     background-color: white;
//     position: absolute;
//     top: 20%;
//     left: 30%;
//     width: 40%;
//     padding: 20px;
//     border-radius: 5px;
//     border: 2px solid black;
//   `
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