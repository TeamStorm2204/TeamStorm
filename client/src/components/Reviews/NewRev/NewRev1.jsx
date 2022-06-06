import { ThemeProvider } from 'styled-components'
import React from 'react';
import {
  Suspense,
  useEffect,
  useState,
  useContext
} from 'react';
import { UserContext } from '../../App.jsx';
import api from '../../../../API';
import {
  InputBox,
  Header,
  Modal,
  ModalContent,
  StyledButton,
  Close
} from '../../Styles.styled.js';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';

const NewRev1 = ({ meta, relatedId }) => {
  let product = useContext(UserContext)

  let styles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column - reverse',
  }
  const [dist, setDist] = useState(['none'])
  const [pgNum, setPgNum] = useState(1)
  const [fullForm, setfullForm] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [form1, setForm1] = useState({
    product_id: relatedId,
    rating: 0,
    recommend: false,
    name: '',
    summary: '',
    body: '',
    email: '',
    photos: [],
    characteristics: {}
  })
  const [form2, setForm2] = useState({
    size: 14,
    width: 15,
    comfort: 16,
    quality: 17,
    length: 18,
    fit: 19
  })
  useEffect(() => {
    let obj = {}
    for (let key in meta) {
      obj[key.toLowerCase()] = {
        id: form2[key.toLowerCase()],
        value: 0
      }
    }
    setForm2(obj)
  }, [])

  let toggle = () => {
    setPgNum(1)
    setForm1({
      product_id: relatedId,
      rating: 0,
      recommend: false,
      name: '',
      summary: '',
      body: '',
      email: '',
      photos: [],
      characteristics: {}
    })
    let obj = {}
    for (let key in meta) {
      obj[key.toLowerCase()] = {
        id: form2[key.toLowerCase()],
        value: 0
      }
    }
    setForm2(obj)
    return dist[0] === 'none' ? setDist(['block']) : setDist(['none'])
  }
  var decPage = () => {
    setPgNum(pgNum - 1)
  }
  var incPage = () => {
    setPgNum(pgNum + 1)
  }



  var changeView = () => {
    switch (pgNum) {
      case 1:
        return (
          <Form1
            relatedId={relatedId}
            form1={form1}
            setForm1={setForm1}
            incPage={incPage} />
        )
      case 2:
        return (
          <Form2
            setSubmitted={setSubmitted}
            form1={form1}
            form2={form2}
            setForm2={setForm2}
            incPage={incPage}
            decPage={decPage} />
        )
      case 3:
        return (
          <Form3
            form1={form1}
            form2={form2}
            submitted={submitted} />
        )
    }
  }
  return (
    <div>
      <div>
        <StyledButton style={{ fontWeight: 'bold' }} onClick={toggle}>WRITE A REVIEW</StyledButton>
        <Modal dis={dist}>
          <ModalContent>
            <div style={{ display: 'flex' }}>
              <Close onClick={toggle}>&times;</Close>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              {changeView()}
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div >
  )
}

export default NewRev1;