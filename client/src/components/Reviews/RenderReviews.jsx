import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import { Body, Scrollbar, PrimaryButton, ReviewsList } from '../Styles.styled.js';
const RenderReviews = ({ renderMore, renderedReviews, mainList }) => {
  return (
    <Body>
      {
        <ReviewsList>
          {
            (renderedReviews.length > 2 ?
              <Scrollbar>
                <div>
                  {renderedReviews.map(t => {
                    return (
                      <ReviewItem t={t} />
                    )
                  })}
                </div>
              </Scrollbar>
              : renderedReviews.map(t => {
                return (
                  <ReviewItem t={t} />
                )
              }))
          }
          {renderedReviews.length !== mainList.length ? <PrimaryButton onClick={() => renderMore()}>More Reviews</PrimaryButton> : null}
        </ReviewsList>
      }
    </Body>
  )
}

export default RenderReviews;
