import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from './App.jsx';
import api from '../../API';
import { InputBox, StyledButton, RadioButton, PrimaryButton } from './Styles.styled.js';

const Form2 = ({ setSubmitted, form1, form2, setForm2, incPage, decPage }) => {
  let charStObj = {
    sizeArr: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    widthArr: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    comfortArr: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    qualityArr: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    lengthArr: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    fitArr: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'],
  }
  let labels = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit']
  let product = useContext(UserContext)

  var handleForm2Inputs = (e, num) => {
    let arr = Object.keys(form2);
    let obj = {};
    arr.map(t => {
      obj[t] = [];
    })

    arr.map(t => {
      let list = document.getElementsByName(t)
      for (let i = 0; i < list.length; i++) {
        obj[t].push(list[i].checked)
      }
    })

    let formObj = {}

    arr.map(t => {
      formObj[t] = {
        id: form2[t].id,
        value: 1 + obj[t].indexOf(true)
      }
    })
    incPage();

    setForm2(formObj);

    if (num === 2) {
      incPage()
      setSubmitted(true)
    } else {
      decPage()
    }
  }

  let styles = {
    div: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
      paddingBottom: '20px',
      borderBottom: '1px solid grey',
    },
  }
  return (
    <form>
      <h1>Write a review for {product.currentPD.name}</h1>
      {labels.map(t => {
        let lowT = t.toLowerCase()
        if (form2[lowT]) {
          return (
            <div>
              <label>{t}
                <div style={styles.div}>
                  {
                    charStObj[lowT + 'Arr'].map((t, i) => <div><label><RadioButton name={lowT} defaultChecked={form2[lowT].value === i + 1 ? true : false} />{t}</label></div>)
                  }
                </div>
              </label>
              <br />
            </div>
          )
        }
      })}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <PrimaryButton onClick={(e) => {
          e.preventDefault()
          handleForm2Inputs(e, 1)
        }}>Previous</PrimaryButton>
        <StyledButton onClick={(e) => {
          e.preventDefault()
          handleForm2Inputs(e, 2)
        }}>Submit</StyledButton>
      </div>
      <br />
    </form>
  )
}

export default Form2;