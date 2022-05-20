import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState, createContext } from 'react';
import api from '../../API';
import NewReview from './NewReview.jsx';
import RenderReviews from './RenderReviews.jsx';
import { Body, St, ProgressBar, Scrollbar, PrimaryButton, Stars, Header, Ratings, RatingCheck, ReviewsList, Review, SubHeader, GlobalStyles, StyledButton } from './Styles.styled.js';

const theme = {
  colors: {
    header: '#e3d5d5',
    body: '#f5f5f5',
    footer: '#003333',
  }
}
const Reviews = ({ id }) => {
  let arr = [5, 4, 3, 2, 1]
  const [reviews, setReviews] = useState([]);
  const [renderedReviews, setRenderedReviews] = useState([]);
  const [seen, setSeen] = useState(false);
  const [avg, setAvg] = useState(0);
  const [maxRevCt, setMaxRevCt] = useState(0);
  const [filteredRatings, setFilteredRatings] = useState({ 1: [], 2: [], 3: [], 4: [], 5: [] });
  const [isFiltered, setIsFiltered] = useState(false);

  const AvgContext = createContext();
  useEffect(() => {
    api.getReviews({ product_id: id }, (err, data) => {
      console.log('data: ', data)
      if (data.results.length > 0) {
        let sum = 0
        let obj = { 1: [], 2: [], 3: [], 4: [], 5: [] }
        let max = 0;
        for (let i = 0; i < data.results.length; i++) {
          sum += data.results[i].rating
          obj[data.results[i].rating].push(data.results[i])
          obj[data.results[i].rating].length > max ? max = obj[data.results[i].rating].length : max = max
        }
        let avge = sum / data.results.length;
        setAvg(avge)
        setMaxRevCt(max)
        setFilteredRatings(obj)
      }
      setReviews(data.results);
      setRenderedReviews(data.results.slice(0, 2))
    })
  }, []);

  let togglePop = () => {
    setSeen(!seen);
  };

  let renderMore = () => {
    let leng = renderedReviews.length
    if (!isFiltered) {
      let add = reviews.slice(leng, leng + 2)
      setRenderedReviews([...renderedReviews, ...add])
    } else {
      let add = filteredRatings[renderedReviews[0].rating].slice(leng, leng + 2)
      setRenderedReviews([...renderedReviews, ...add])
    }
  }
  let handleFilter = (ratingNum) => {
    console.log('ratingNum: ', ratingNum)
    let arr = filteredRatings[ratingNum]
    if (arr.length === 0) {
      return
    }
    arr.length <= 2 ? setRenderedReviews(arr) : setRenderedReviews(arr.slice(0, 2))
    setIsFiltered(true)
  }
  return (
    <AvgContext.Provider value={avg}>
      <ThemeProvider theme={theme}>
        <Header>
          <h1>Reviews</h1>
          {
            reviews.length !== 0 ?
              <Stars>
                <p style={{ fontSize: '40px' }} >{avg}</p>
                <St average={avg}>★★★★★</St>
              </Stars> : <div></div>
          }
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
          {isFiltered ? <h6>Showing {renderedReviews.length} of {filteredRatings[renderedReviews[0].rating].length} results</h6> : <h6>Showing {renderedReviews.length} of {reviews.length} results</h6>}
          <h5></h5>
          <h6>'Sort by (insert dropdown here)'</h6>
        </SubHeader>
        <Body>
          <Ratings>
            {/* <input type='text' placeholder='Search Reviews' ></input> */}
            <h4></h4>
            <RatingCheck>
              <div>
                {
                  arr.map(t => {
                    return (
                      <div onClick={() => handleFilter(t)} style={{ alignItems: 'center', display: 'flex', textDecoration: 'underline' }}>
                        {t} stars
                        <div style={{ marginLeft: '20px', height: '7px', width: '150px', backgroundColor: 'grey' }}>
                          <ProgressBar percentNum={filteredRatings[t].length / maxRevCt * 100}></ProgressBar>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </RatingCheck>
            <div onClick={() => setIsFiltered(false)} style={{ textDecoration: 'underline' }}>See All Reviews</div>
          </Ratings>
          {
            isFiltered ? <RenderReviews renderMore={renderMore} renderedReviews={renderedReviews} mainList={filteredRatings[renderedReviews[0].rating]} />
              : <RenderReviews renderMore={renderMore} renderedReviews={renderedReviews} mainList={reviews} />
          }
        </Body>
      </ThemeProvider >
    </AvgContext.Provider>
  )
}

export default Reviews;
