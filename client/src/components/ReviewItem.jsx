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
      <h3>{t.summary}</h3>
      <div>{t.body}</div>
    </Review>
  )
}

export default ReviewItem;
