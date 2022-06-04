import React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import RelatedProducts from './Related/RelatedProducts.jsx';
import api from '../../API';
import Reviews from './Reviews/Reviews.jsx';
import OverView from './Overview/Overview.jsx';
import { Body, Header, Ratings, ReviewsList, Review, SubHeader, GlobalStyle, StyledButton } from './Styles.styled.js';
import Outfit from './Related/Outfit.jsx';

import { FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";
// import {library} from '@fortawesome/fontawesome-svg-core';
// import {fas, faFontAwesome} from '@fortawesome/free-solid-svg-icons';
// //import { faBrands, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
// library.add(fas,faFontAwesome);





export const UserContext = createContext();

const App = (props) => {
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [relatedId, setRelatedId] = useState(40344);
  let id = 0;
  useEffect(() => {
    api.getProductInformation(relatedId, (err, data) => {

      if (err) {
        console.log(err)
      } else {
        setProducts(data);
        id = data.id
        api.getProductStyles(id, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            setStyles(data);
          }
        })
      }
    })
  }, [relatedId]);

  if (products.name) {

    return (
      <div>
        <div style={{ display: 'flex', backgroundColor: '#2B2B2B', position: 'fixed', zIndex: '20', left: '0', top: '0', width: '100%', paddingRight: '5%', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ paddingLeft: '20px' }}>
            <img
              src='https://res.cloudinary.com/dzyzvdzj0/image/upload/v1654278094/Screen_Shot_2022-06-03_at_10.40.09_AM_ugzsnz.png'

              width='100'
            />
          </div >
          <div style={{ paddingRight: '20px', gap: '10px', display: 'flex' }} >
            <TiLocation color='white' fontSize='25px' margin='10px' />
            <CgProfile color='white' fontSize='25px' margin='10px' />
            <FaShoppingCart color='white' fontSize='25px' margin='10px' />
          </div>
        </div>
        <UserContext.Provider value={{ currentPD: products, Img: styles }}>
          <div>
            <GlobalStyle color='#f5f5f5' />
            <div>
              {products.id ? <OverView id={products.id} /> : null}
            </div>
            <div>
              <br></br>
            </div>
            <div>
              <RelatedProducts setRelatedId={setRelatedId} />
            </div>
            <div>
              <Outfit />
            </div>
            <div>
              <Reviews relatedId={relatedId} />
            </div>
          </div>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App;

