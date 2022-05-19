import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../API';
import NewReview from './NewReview.jsx';
import { Body, Header, Ratings, RatingCheck, ReviewsList, Review, SubHeader, GlobalStyles, StyledButton } from './Styles.styled.js';

const theme = {
  colors: {
    header: '#e3d5d5',
    body: '#f5f5f5',
    footer: '#003333'
  }
}
const Reviews = (props) => {
  let arr = [5, 4, 3, 2, 1]
  const [reviews, setReviews] = useState([]);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    api.getReviews({ product_id: 40344 }, (err, data) => {
      console.log('data: ', data)
      setReviews(data.results);
    })
  }, []);
  let togglePop = () => {
    setSeen(!seen);
  };
  return (
    <ThemeProvider theme={theme} >
      <Header>
        <h1>Reviews</h1>
        <h5>Stars</h5>
        <h5>Fit Slide Bar</h5>
        <div>
          <div className="btn" onClick={togglePop}>
            <StyledButton>New Review</StyledButton>
          </div>
          {seen ? <NewReview toggle={togglePop} /> : null}
        </div>
      </Header>
      <SubHeader>
        <h6>Filter Reviews</h6>
        <h6>Showing {reviews.length} of {reviews.length} results</h6>
        <h5></h5>
        <h6>'Sort by (insert dropdown here)'</h6>
      </SubHeader>
      <Body>
        <Ratings>
          <input type='text' placeholder='Search Reviews' ></input>
          <h6>Rating</h6>
          <RatingCheck>
            {
              arr.map(t => <label><input type="checkbox" name="checkbox" value="value" /> {t} stars</label>)
            }
          </RatingCheck>
        </Ratings>
        <ReviewsList>
          {reviews.map(t => {
            { console.log('t: ', t) }
            return (
              <Review>
                <br></br>
                <h2>{t.reviewer_name}</h2>
                <h3>{t.summary}</h3>
                <div>{t.body}</div>
              </Review>
            )
          })}
        </ReviewsList>
      </Body>
    </ThemeProvider >
  )
}

export default Reviews;