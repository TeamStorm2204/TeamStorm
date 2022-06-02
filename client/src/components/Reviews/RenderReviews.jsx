import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import { Body, Scrollbar, PrimaryButton, ReviewsList } from '../Styles.styled.js';
const RenderReviews = ({ helpfulList, setHelpfulList, renderMore, renderedReviews, mainList }) => {
  return (
    <div style={{ marginTop: '-25px' }}>
      {
        <ReviewsList>
          <div style={{ height: '550px', overflow: 'hidden' }}>
            {
              (renderedReviews.length > 2 ?
                <Scrollbar>
                  <div>
                    {renderedReviews.map(t => {
                      return (
                        <ReviewItem helpfulList={helpfulList} setHelpfulList={setHelpfulList} t={t} />
                      )
                    })}
                  </div>
                </Scrollbar>
                : renderedReviews.map(t => {
                  return (
                    <ReviewItem helpfulList={helpfulList} setHelpfulList={setHelpfulList} t={{ ...t }} />
                  )
                }))
            }
          </div>
          {renderedReviews.length !== mainList.length ? <PrimaryButton style={{ marginTop: '25px', fontSize: '15px', fontWeight: 'bold' }} onClick={() => renderMore()}>MORE REVIEWS</PrimaryButton> : null}
        </ReviewsList>
      }
    </div>
  )
}

export default RenderReviews;
