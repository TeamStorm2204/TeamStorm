import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Close, CloseButton, XfeatureL, XfeatureR, Value, HeadL, HeadR } from './StyleRelated.js';
import API from '../../../API';
import styled from 'styled-components';
import {VscError} from 'react-icons/vsc';


// eslint-disable-next-line react/prop-types
const Modal =({closeModal, length, id, relatedInf}) => {
  const [totalFeatures, setFeatures] = useState({});

  useEffect(() => {
    API.getProductInformation(id, (err, data) => {
      if (err) {
        console.log(err);
      }else {
        // eslint-disable-next-line react/prop-types
        var total = data.features.concat(relatedInf.features);
        var featuresTitle = [];
        for (let i = 0; i < total.length; i++) {
          if (!featuresTitle.includes(total[i].feature)) {
            featuresTitle.push(total[i].feature);
          }
        }
        var totalInfor = {overView: data, related: relatedInf, featuresTitle:featuresTitle}; //data/related  has the name; deaturesTitle has all no repeative titles; data.feature or relatedInf.features has its features
        setFeatures(totalInfor);
      }
    })
  }, [])


  if (totalFeatures.overView !== undefined) {
    console.log('waht is overView', totalFeatures);
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <HeadL>{totalFeatures.overView.name}</HeadL>
              <th> </th>
              <HeadR>{totalFeatures.related.name}</HeadR>
              <th> </th>
            </tr>
          </thead>
          <tbody id='table'>
            {totalFeatures.featuresTitle.map((item, key) => (
              <tr key={key}>
                <XfeatureL>
                  {totalFeatures.overView.features.map((item1) => (
                    (item1.feature === item)
                      ? (item1.value)
                        ? `${item1.value}`
                        : '✓'
                      : ' '
                  ))
                  }
                </XfeatureL>
                <Value>{item}</Value>
                <XfeatureR>
                  {totalFeatures.related.features.map((item2) => (
                    (item2.feature === item)
                      ? (item2.value)
                        ? `${item2.value}`
                        : '✓'
                      : ' '
                  ))
                  }
                </XfeatureR>
              </tr>
            ))
            }
          </tbody>
        </table>
        <CloseButton onClick={()=>closeModal(Array(length).fill(false))}> close</CloseButton>
      </Container>
    )
  }
}


export default Modal;


