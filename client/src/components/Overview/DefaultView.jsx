import React from 'react';
import { useEffect, useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { ThumbImg, BorderThumbImg, LeftArrow, RightArrow } from './OverviewStyles.js';
import { DefaultContainer, DefaultImage, ArrowsContainer, ThumbnailsContainer, InnerContainer, ThumbnailsRightArrow, ThumbnailsLeftArrow } from './ImageViewStyles.js'

const DefaultView = (props) => {
  const photos = props.selectedStyle.photos
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [indexStart, setIndexStart] = useState(0);
  const [indexEnd, setIndexEnd] = useState(6);

  useEffect(() => {
    setIndexStart(0);
    setIndexEnd(6);
  }, [props.selectedStyle]);

  const rightArrowClick = function () {
    setIndexStart(indexStart - 1);
    setIndexEnd(indexEnd - 1);
  }
  const leftArrowClick = function () {
    setIndexStart(indexStart + 1);
    setIndexEnd(indexEnd + 1);
  }

  const mainArrowClick = function (direction) {
    let index;
    if (direction === 'left') {
      index = selectedIndex + 1;
    } else {
      index = selectedIndex - 1;
    }
    setSelectedIndex(index);
    props.setSelectedImg(index);
    if(index < indexStart)  {
      setIndexStart(index);
      setIndexEnd(index + 6);
    }
    if (index > indexEnd) {
      setIndexStart(index - 6);
      setIndexEnd(index);
    }
  }

  const expandView = function () {
    props.setExpanded(true);
  }

  return (
    <DefaultContainer>
        <DefaultImage src={photos[selectedIndex].url } loading="lazy" onClick={expandView}/>
        <ArrowsContainer>
            {(selectedIndex > 0)? 
              <LeftArrow>
                <FaChevronCircleLeft onClick={mainArrowClick}>
                </FaChevronCircleLeft>
              </LeftArrow> : null
            }
            {(photos.length > (selectedIndex + 1)) ?
              <RightArrow>
                <FaChevronCircleRight onClick={()=>{mainArrowClick('left')}}>
                </FaChevronCircleRight>
              </RightArrow> : null
            }
        </ArrowsContainer>

        <ThumbnailsContainer>
          <InnerContainer>
            {photos.map((photo, index)=>(
              (index >= indexStart && (index <= indexEnd))?
                (selectedIndex !== index)? 
                  <ThumbImg src={photo.thumbnail_url} loading="lazy" key={index} onClick={()=>setSelectedIndex(index)}/>:
                  <BorderThumbImg src={photo.thumbnail_url} loading="lazy" key={index} onClick={()=>setSelectedIndex(index)}/>
                : null
            ))}
            {(indexStart > 0)?
              <ThumbnailsLeftArrow>
                <FaChevronCircleLeft onClick={rightArrowClick}/>
              </ThumbnailsLeftArrow> : null
            }
            {(photos.length > (indexEnd + 1))?
              <ThumbnailsRightArrow>
                <FaChevronCircleRight onClick={leftArrowClick}></FaChevronCircleRight >
              </ThumbnailsRightArrow> : null}
          </InnerContainer>
        </ThumbnailsContainer>

    </DefaultContainer>
  )
}
export default DefaultView;