import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState, createContext } from 'react';
import { St, Review } from './Styles.styled.js';


const ReviewItem = ({ t }) => {
  let dateConverter = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
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
      <br />
      <div style={{ display: 'flex', fontSize: '13px', color: '#8a8a8a' }}>
        <div>Helpful?&nbsp;</div>
        <div style={{ textDecoration: 'underline' }}>Yes ({t.helpfulness})</div>
        <div>&nbsp; | &nbsp;</div>
        <div style={{ textDecoration: 'underline' }}> Report </div>
      </div>


    </Review >
  )
}

export default ReviewItem;
