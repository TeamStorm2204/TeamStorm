import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

//ExpandedView Styling

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
//DefaultView Styling

export const DefaultContainer = styled.div`
    display: flex;
    justify-content: center;
    aspect-ratio: 3/4;
`
export const DefaultImage = styled.img`
    width: 100%;
    height: 100%;
    objectFit: cover; 
    cursor: zoom-in;
`
export const ArrowsContainer = styled.div`
    display: flex;
    align-items: center;
`
export const ThumbnailsContainer = styled.div`
    display: flex;
    align-items: end;
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 0;
    align-items: center;
    justify-content: center;
    aspect-ratio: 8/1;
`
export const ThumbnailsRightArrow = styled.div`
    position: absolute;
    left: 10px;
    color: white;
    &:hover {
        opacity: 0.8;
      }
`
export const ThumbnailsLeftArrow = styled.div`
    position: absolute;
    right: 10px;
    color: white;
    &:hover {
        opacity: 0.8;
      }
`