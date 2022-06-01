import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import { UserContext } from '../App.jsx';
import api from '../../../API';
import NewRev1 from './NewRev/NewRev1.jsx';
import RenderReviews from './RenderReviews.jsx';
import { FilterRate, Body, RangeSlider, Dropdown, DropdownMenu, DrpItem, St, ProgressBar, Scrollbar, PrimaryButton, Star, Header, Ratings, RatingCheck, SubHeader, GlobalStyles, StyledButton } from '../Styles.styled.js';
import Stars from '../Stars.jsx';
import { AiOutlineDown } from "react-icons/ai";

export const Average = createContext();
const theme = {
  colors: {
    header: '#e3d5d5',
    body: '#f5f5f5',
    footer: '#003333',
  }
}
const Reviews = ({ relatedId }) => {
  let metaStrings = {
    size: ['Too small', 'Too big'],
    width: ['Too narrow', 'Too wide'],
    comfort: ['Poor', 'Perfect'],
    quality: ['Poor', 'Perfect'],
    length: ['Too short', 'Too long'],
    fit: ['Too tight', 'Too loose'],
  }
  let product = useContext(UserContext)
  let id = product.currentPD.id

  let arr = [5, 4, 3, 2, 1]
  const [reviews, setReviews] = useState([]);
  const [renderedReviews, setRenderedReviews] = useState([]);
  const [avg, setAvg] = useState(0);
  const [maxRevCt, setMaxRevCt] = useState(0);
  const [filteredRatings, setFilteredRatings] = useState({ 1: [], 2: [], 3: [], 4: [], 5: [] });
  const [filteredArrs, setFilteredArrs] = useState([])
  const [isFiltered, setIsFiltered] = useState(false);
  const [meta, setMeta] = useState({});
  const [sortert, setSortert] = useState(['relevant', 'Relevance'])
  const [helpfulList, setHelpfulList] = useState([])
  const [filterTags, setFilterTags] = useState([])
  const [filterClick, setFilterClick] = useState(false)
  const [rec, setRec] = useState(0)
  useEffect(() => {
    api.getReviews({ product_id: id, count: 1000, sort: sortert[0] }, (err, data) => {
      if (data.results.length > 0) {
        let sum = 0
        let obj = { 1: [], 2: [], 3: [], 4: [], 5: [] }
        let max = 0;
        for (let i = 0; i < data.results.length; i++) {
          sum += data.results[i].rating
          obj[data.results[i].rating].push(data.results[i])
          obj[data.results[i].rating].length > max ? max = obj[data.results[i].rating].length : max = max
        }
        setMaxRevCt(max)
        setFilteredRatings(obj)
      }
      setReviews(data.results);
      if (isFiltered) {
        setRenderedReviews(filteredArrs.slice(0, 2))
        return
      }
      setRenderedReviews(data.results.slice(0, 2))

      api.getReviewsMeta({ product_id: id }, (err, data) => {
        if (err) {
          console.log(err)
        } else {
          setMeta(data.characteristics)
          let pRec = Number(data.recommended.true) / (Number(data.recommended.false) + Number(data.recommended.true)) * 100
          setRec(pRec)
          let sum = 0;
          let avgg = 0;
          let count = 0;
          for (let key in data.ratings) {
            sum += Number(data.ratings[key]) * Number(key);
            count += Number(data.ratings[key])
          }
          avgg = sum / count;
          setAvg(avgg)
        }
      })
    })
  }, [id, sortert]);
  //, filteredArrs, filterTags,isFiltered,
  var sorter = (sortType) => {
    setSortert(sortType)
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
    let arr = filterTags.slice()
    if (filterTags.includes(ratingNum)) {
      let index = filterTags.indexOf(ratingNum)
      arr.splice(index, 1)
    } else {
      arr.push(ratingNum)
    }
    let filtArr = reviews.filter(t => {
      return arr.includes(t.rating)
    })
    setFilterTags(arr)
    setFilteredArrs(filtArr)
    setRenderedReviews(filtArr.slice(0, 2))

    if (arr.length > 0) {
      setIsFiltered(true)
    } else {
      setRenderedReviews(reviews.slice(0, 2))
      setIsFiltered(false)
    }
  }


  return (
    <div style={{ height: '700px' }}>
      <ThemeProvider theme={theme}>
        <Header>
          <div>
            <h1 style={{ fontSize: '40px' }}>Reviews &</h1 >
            <h1 style={{ marginTop: '-30px', fontSize: '40px' }}>Ratings</h1 >
          </div>
          {
            reviews.length !== 0 ?
              <div>
                <Star style={{ paddingTop: '20px', display: 'flex', alignItems: 'baseline' }}>
                  <p style={{ fontWeight: '600', fontSize: '50px', textShadow: '3px 3px 1px #c2c2c2' }} >{Math.round(avg * 10) / 10}</p>
                  <div style={{ fontSize: '20px', display: 'inline-block' }}>
                    {avg > 0 ? <St average={Math.round(avg * 10) / 10}>★★★★★</St> : null}
                  </div>
                </Star>
                <div style={{ marginTop: '-35px', display: 'flex', fontSize: '13px', color: '#8a8a8a' }}>
                  Recommended by {Math.round(rec * 100) / 100}% of reviewers
                </div>
              </div>
              : <div></div>
          }
          < h5 ></h5>
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <NewRev1 relatedId={id} meta={meta} />
          </div>
        </Header>
        <SubHeader>
          <h6>Filter Reviews</h6>
          {isFiltered ? <h6>Showing {renderedReviews.length} of {filteredArrs.length} results</h6> : <h6>Showing {renderedReviews.length} of {reviews.length} results</h6>}
          <h5></h5>
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Dropdown>
              <div>
                <h6 style={{ cursor: 'pointer' }} onClick={() => setFilterClick(prev => !prev)}>Filtered by: <b style={{ textDecoration: 'underline' }}>{sortert[1]}<span><AiOutlineDown /></span></b></h6>
              </div>
              <DropdownMenu dis={filterClick}>
                <DrpItem onClick={() => {
                  setFilterClick(prev => !prev)
                  sorter(['newest', 'Newest'])
                }}>&nbsp; <b>Newest</b></DrpItem>
                <DrpItem onClick={() => {
                  setFilterClick(prev => !prev)
                  sorter(['helpful', 'Helpfulness'])
                }}>&nbsp; <b>Helpfulness</b></DrpItem>
                <DrpItem onClick={() => {
                  setFilterClick(prev => !prev)
                  sorter(['relevant', 'Relevance'])
                }
                }>&nbsp; <b>Recommended</b></DrpItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </SubHeader>
        <Body>
          <Ratings>
            <RatingCheck>
              <div style={{ marginTop: '-10px' }}>
                {
                  arr.map(t => {
                    return (
                      <FilterRate onClick={() => {
                        handleFilter(t)
                      }} style={{ background: `${filterTags.includes(t) ? 'rgba(0, 0, 0, 0.07)' : ''}` }}>
                        {t} stars
                        <div style={{ marginLeft: '20px', height: '7px', width: '150px', backgroundColor: 'grey' }}>
                          <ProgressBar percentNum={filteredRatings[t].length / maxRevCt * 100}></ProgressBar>
                        </div>
                      </FilterRate>
                    )
                  })
                }
              </div>
            </RatingCheck>
            {
              Object.keys(meta).map(t => {
                let lowT = t.toLowerCase()
                return (
                  <div style={{ margin: '5px', width: '240px', fontSize: '15px', color: '#4f4e4e', marginTop: '5px' }}>
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
            <br />
          </Ratings>
          <RenderReviews
            helpfulList={helpfulList}
            setHelpfulList={setHelpfulList}
            renderMore={renderMore}
            renderedReviews={renderedReviews}
            mainList={isFiltered ? filteredArrs : reviews}
          />
        </Body>
      </ThemeProvider >
    </div >
  )
}

export default Reviews;
