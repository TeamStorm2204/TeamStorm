import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState, createContext } from 'react';
import { St, Review } from '../Styles.styled.js';
import api from '../../../API'

const ReviewItem = ({ t }) => {
  let [clicked, setClicked] = useState(false)
  let dateConverter = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  let handleYesClick = (id) => {
    console.log(id)
    api.editHelpful(id, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log('success')
      }
    })
  }

  return (
    <Review>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <St average={t.rating}>★★★★★</St>
        <span style={{ fontSize: '13px', color: '#a3a3a3' }}>{t.reviewer_name},  {dateConverter(t.date)}</span>
      </div>
      <div style={{ fontSize: '25px', textDecoration: 'bold', marginTop: '15px' }}>{t.summary}</div>
      <br />
      <div style={{ fontSize: '16px' }}>{t.body.length <= 250 ? t.body : t.body.substring(0, 250) + '...'}</div>
      <div>{t.body.length >= 250 ? 'Read More' : null}</div>
      <br />
      {t.recommend ? <div style={{ fontSize: '16px' }}>✔️ I recommend this product</div> : null}
      <div>
        {
          t.photos.length !== 0 ?
            t.photos.map(i => {
              return <img
                src={i.url}
                width="100"
                marginTop='20px'
                alt="header image"
              />
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
        <div onClick={() => handleYesClick(t.review_id)} style={{ textDecoration: 'underline' }}>Yes ({t.helpfulness})</div>
        <div>&nbsp; | &nbsp;</div>
        <div style={{ textDecoration: 'underline' }}> Report </div>
      </div>


    </Review >
  )
}

export default ReviewItem;
