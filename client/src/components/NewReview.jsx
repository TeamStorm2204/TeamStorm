import { ThemeProvider } from 'styled-components'
import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../API';
import { Popup, PopupContent } from './Styles.styled.js';

const NewReview = ({ toggle }) => {
  let handleClick = () => {
    toggle();
  };
  return (
    <Popup>
      <div>
        <span className="close" onClick={handleClick}>&times;</span>
        <p>I'm A Pop Up!!!</p>
      </div>
    </Popup>
  )
}

export default NewReview;