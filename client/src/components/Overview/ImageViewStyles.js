import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const ZoomContainer = styled.div`
    display: flex;
    justify-content: center;
    cursor: zoom-out;
`
export const ExpandedContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 300px;
`
export const SideContainer = styled.div`
    display: flex;
    position: relative;
`
export const LeftArrow = styled.div`
    display: flex;
    position: absolute;
    top:  50%;
    left: 2px;
    color: white;
    font-size: 1.5em;
    &:hover {
        opacity: 0.8;
        color: lightGray;
      }
`
export const ExpandedImage = styled.img`
    width: auto;
    height: 100%;
    max-height: 600px;
    objectFit: contain; 
    cursor: zoom-in;
`
export const Compress = styled.div`
    display: flex;
    position: absolute;
    top: 2px;
    right: 2px;
    color: white;
    font-size: 1.5em;
    &:hover {
        opacity: 0.8;
        color: lightGray;
      }
`
export const RightArrow = styled.div`
    top: 50%;
    display: flex;
    position: absolute;
    right: 2px;
    color: white;
    font-size: 1.5em;
    &:hover {
        opacity: 0.8;
        color: lightGray;
      }
`
export const BottomContainer = styled.div`
    position: absolute;
    bottom: 2px;
`
export const ImageIcons = styled.div`
    display: flex;
    position: relative;
    gap: 3px;
    color: white;
`
export const ImageIcon = styled.div`
    &:hover {
        opacity: 0.8;
        color: lightGray;
      }
`