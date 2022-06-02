import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState, createContext } from 'react';
import { St, Review, ReadMore, Yes, Report } from '../Styles.styled.js';
import api from '../../../API'

const ReviewItem = ({ helpfulList, setHelpfulList, t }) => {
  let [clicked, setClicked] = useState(false)
  let [rev, setRev] = useState(t)
  let [reported, setReported] = useState(false)
  let [newHelp, setNewHelp] = useState(t.helpfulness)
  let [readMore, setReadMore] = useState(false)

  let dateConverter = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  let handleYesClick = (id) => {
    if (helpfulList.includes(id)) {
      return;
    }
    api.editHelpful(id, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        setClicked(true)
        setNewHelp(t.helpfulness + 1)
        // setHelpfulList([...helpfulList, id])
        console.log('success')
      }
    })
  }

  let handleReport = (id) => {
    api.report(id, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        setReported(true)
        console.log('success')
      }
    })
  }
  useEffect(() => {
    console.log('hi')
  }, [reported, readMore])

  return (
    <Review>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <St average={t.rating}>★★★★★</St>
        <span style={{ fontSize: '13px', color: '#a3a3a3' }}>{t.reviewer_name},  {dateConverter(t.date)}</span>
      </div>
      <div style={{ fontSize: '25px', textDecoration: 'bold', marginTop: '15px' }}>{t.summary}</div>
      <br />
      {
        readMore ? <div style={{ fontSize: '16px' }}> {t.body}</div> :
          <>
            <div style={{ fontSize: '16px' }}>{t.body.length <= 250 ? t.body : t.body.substring(0, 200) + '...'}</div>
            <ReadMore onClick={() => setReadMore(true)}>{t.body.length >= 200 ? 'Read More' : null}</ReadMore>
          </>

      }
      <br />
      {t.recommend ? <div style={{ fontSize: '16px' }}>✔️ I recommend this product</div> : null}
      <div>
        {
          t.photos.length !== 0 ?
            t.photos.map(i => {
              return (
                <span style={{ marginRight: '10px' }}>
                  <img
                    src={i.url}
                    width="100"
                    alt="header image"
                  />
                </span>
              )
            }) : null
        }
      </div>
      {
        t.response ?
          <div>
            <h3>Response from the seller: </h3>
            <div style={{ fontSize: '16px' }}>{t.response}</div>
          </div>
          : null
      }
      <br />
      <div style={{ display: 'flex', fontSize: '13px', color: '#8a8a8a' }}>
        <div>Helpful?&nbsp;</div>
        {
          clicked ?
            <div style={{ textDecoration: 'underline' }}>Yes ({newHelp})</div>
            :
            <Yes onClick={() => handleYesClick(t.review_id)} style={{ textDecoration: 'underline' }}>Yes ({t.helpfulness})</Yes >
        }
        <div>&nbsp; | &nbsp;</div>
        {
          reported ?
            <div style={{ textDecoration: 'underline', color: 'red' }}> Reported </div>
            :
            <Report onClick={() => handleReport(t.review_id)} style={{ textDecoration: 'underline' }}> Report </Report >
        }
      </div>


    </Review >
  )
}

export default ReviewItem;
