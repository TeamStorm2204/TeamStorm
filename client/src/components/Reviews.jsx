import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../API';
import NewReview from './NewReview.jsx';
import { Body, Stars, Header, Ratings, RatingCheck, ReviewsList, Review, SubHeader, GlobalStyles, StyledButton } from './Styles.styled.js';

const theme = {
  colors: {
    header: '#e3d5d5',
    body: '#f5f5f5',
    footer: '#003333'
  }
}
const Reviews = ({ id }) => {
  let arr = [5, 4, 3, 2, 1]
  const [reviews, setReviews] = useState([]);
  const [seen, setSeen] = useState(false);
  const [avg, setAvg] = useState(1);
  const [filteredRatings, setFilteredRatings] = useState(null);

  useEffect(() => {
    api.getReviews({ product_id: id }, (err, data) => {
      if (data.results.length > 0) {
        let sum = 0
        for (let i = 0; i < data.results.length; i++) {
          sum += data.results[i].rating
        }
        let avge = Math.round(sum / data.results.length);
        setAvg(avge)
        console.log('average: ', avg)
      }
      setReviews(data.results);
    })
  }, []);

  let togglePop = () => {
    setSeen(!seen);
  };

  let dateConverter = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  let handleFilter = () => {

  }
  return (
    <ThemeProvider theme={theme} >
      <Header>
        <h1>Reviews</h1>
        <Stars>
          <p style={{ fontSize: '40px' }} >{avg}</p>
          {
            reviews.length > 0 ?
              [1, 2, 3, 4, 5].map((t) => {
                return t <= avg ? <span>★</span> : <span>☆</span>
              }) : null
          }
        </Stars>
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
            return (
              <Review>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    {
                      reviews.length > 0 ?
                        [1, 2, 3, 4, 5].map((p) => {
                          return p <= t.rating ? <span>★</span> : <span>☆</span>
                        }) : null
                    }
                  </div>
                  <span style={{ fontSize: '13px', color: '#a3a3a3' }}>{t.reviewer_name},  {dateConverter(t.date)}</span>
                </div>
                {/* <h2>{t.reviewer_name}</h2> */}
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
