import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from './App.jsx';
import api from '../../API';
import { InputBox, StyledButton } from './Styles.styled.js';

const Form3 = ({ form1, form2, submitted }) => {
  useEffect(() => {
    if (submitted) {
      let cha = {}
      for (let key in form2) {
        cha[form2[key].id.id] = form2[key].value
      }
      let combined = { ...form1, characteristics: {} }

      console.log('combined: ', combined)
      api.createReview(combined, (err, data) => {
        if (err) {
          console.log(err)
        } else {
          console.log('Success!')
        }
      })
    }
  }, []);
  return (
    <div style={{ marginTop: '100px', marginBottom: '100px', background: 'white' }}>
      <h2>Thanks For Submitting a Review!</h2>
    </div>
  )
}

export default Form3;