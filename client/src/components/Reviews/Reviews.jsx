import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import { UserContext } from '../App.jsx';
import api from '../../../API';
import NewRev1 from './NewRev/NewRev1.jsx';
import RenderReviews from './RenderReviews.jsx';
import { Body, RangeSlider, Dropdown, DropdownMenu, DrpItem, St, ProgressBar, Scrollbar, PrimaryButton, Star, Header, Ratings, RatingCheck, SubHeader, GlobalStyles, StyledButton } from '../Styles.styled.js';
import Stars from '../Stars.jsx';

export const Average = createContext();
let filterTags = []
const theme = {
  colors: {
    header: '#e3d5d5',
    body: '#f5f5f5',
    footer: '#003333',
  }
}
const Reviews = ({relatedId}) => {
  let metaStrings = {
    size: ['Too small', 'Too big'],
    width: ['Too narrow', 'Too wide'],
    comfort: ['Poor', 'Perfect'],
    quality: ['Poor', 'Perfect'],
    length: ['Too short', 'Too long'],
    fit: ['Too tight', 'Too loose'],
  }
  let id = useContext(UserContext)
  
  console.log('id', id.currentPD.id);
  let arr = [5, 4, 3, 2, 1]
  const [reviews, setReviews] = useState([]);
  const [renderedReviews, setRenderedReviews] = useState([]);
  const [avg, setAvg] = useState(0);
  const [maxRevCt, setMaxRevCt] = useState(0);
  const [filteredRatings, setFilteredRatings] = useState({ 1: [], 2: [], 3: [], 4: [], 5: [] });
  const [filteredArrs, setFilteredArrs] = useState([])
  const [isFiltered, setIsFiltered] = useState(false);
  const [meta, setMeta] = useState({});
  // const [filterTags, setFilterTags] = useState([])
  useEffect(() => {
    api.getReviews({ product_id: id.currentPD.id, count: 100 }, (err, data) => {

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

      api.getReviewsMeta({ product_id: id.currentPD.id }, (err, data) => {
        setMeta(data.characteristics)
      })
    })
  }, [isFiltered, setAvg, relatedId]);

  var sorter = (sortType) => {
    setIsFiltered(false)
    api.getReviews({ product_id: id.currentPD.id, sort: sortType, count: 100 }, (err, data) => {
      setReviews(data.results);
      setRenderedReviews(data.results.slice(0, 2))
    })
  }

  let renderMore = () => {
    let leng = renderedReviews.length
    if (!isFiltered) {
      // let add = reviews.slice(leng)
      setRenderedReviews(reviews)
    } else {
      // let add = filteredArrs[renderedReviews[0].rating].slice(leng)
      setRenderedReviews(filteredArrs)
    }
  }
  let handleFilter = (ratingNum) => {
    let newFilterTags = filterTags.slice()
    if (newFilterTags.slice(0, filterTags.length - 1).includes(ratingNum)) {
      newFilterTags.pop()
      let ind = newFilterTags.indexOf(ratingNum)
      newFilterTags.splice(ind, 1)
    }
    let arr = filteredRatings[ratingNum]
    if (arr.length === 0) {
      filterTags.pop()
      return
    }
    let bigArr = []
    newFilterTags.map(t => {
      let a = filteredRatings[t]
      bigArr.push(a)
    })
    filterTags = newFilterTags;
    setFilteredArrs(bigArr.flat())
    setRenderedReviews(bigArr.flat().slice(0, 2))
    if (newFilterTags.length > 0) {
      setIsFiltered(true)
    } else {
      setIsFiltered(false)
    }
  }
  return (
    <div style={{ height: '700px' }}>
      <ThemeProvider theme={theme}>
        <Header>
          <h1>Reviews</h1>
          {
            reviews.length !== 0 ?
              <Star>
                <p style={{ fontSize: '40px' }} >{Math.round(avg * 10) / 10}</p>
                <Stars id={id.currentPD.id} />
              </Star> : <div></div>
          }
          <h5>Fit Slide Bar</h5>
          <div>
            <NewRev1 meta={meta} />
          </div>
        </Header>
        <SubHeader>
          <h5>Filter Reviews</h5>
          {isFiltered ? <h6>Showing {renderedReviews.length} of {filteredArrs.length} results</h6> : <h6>Showing {renderedReviews.length} of {reviews.length} results</h6>}
          <h5></h5>
          <div>
            <Dropdown>
              <span style={{ textDecoration: 'underline', fontSize: '15px' }}>Filter by...🔽</span>
              <DropdownMenu>
                <DrpItem onClick={() => sorter('newest')}>Newest</DrpItem>
                <DrpItem onClick={() => sorter('helpful')}>Helpfulness</DrpItem>
                <DrpItem onClick={() => sorter('relevant')}>Recommended</DrpItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </SubHeader>
        <Body>
          <Ratings>
            <br></br>
            <div style={{ display: 'flex' }}>
              {filterTags.map(t => {
                return <span style={{ backgroundColor: 'grey', padding: '5px', fontSize: '12px' }}>{t} stars</span>
              })}
            </div>
            <br></br>
            <RatingCheck>
              <div>
                {
                  arr.map(t => {
                    return (
                      <div onClick={() => {
                        filterTags.push(t)
                        // setFilterTags([...filterTags, t])
                        handleFilter(t)
                      }} style={{ alignItems: 'center', display: 'flex', textDecoration: 'underline', fontSize: '16px', color: '#4f4e4e' }}>
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
            <br />
            {
              Object.keys(meta).map(t => {
                let lowT = t.toLowerCase()
                return (
                  <div style={{ width: '200px', fontSize: '16px', color: '#4f4e4e', marginTop: '15px' }}>
                    {t}
                    <RangeSlider>
                      <input type="range" min="1" max="5" value={meta[t].value} className="slider" ></input>
                    </RangeSlider>
                    <div style={{ display: 'flex', fontSize: '12px', justifyContent: 'space-between' }}>
                      <div>{metaStrings[lowT][0]}</div>
                      <div>{metaStrings[lowT][1]}</div>
                    </div>
                  </div>
                )
              })
            }
          </Ratings>
          {
            isFiltered ? <RenderReviews renderMore={renderMore} renderedReviews={renderedReviews} mainList={filteredArrs} />
              : <RenderReviews renderMore={renderMore} renderedReviews={renderedReviews} mainList={reviews} />
          }
        </Body>
      </ThemeProvider >
    </div>
  )
}

export default Reviews;
