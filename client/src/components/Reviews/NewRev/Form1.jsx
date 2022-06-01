import React from 'react';
import { useEffect, useState, useContext } from 'react';
import api from '../../../../API';
import { UserContext } from '../../App.jsx'
import { AddImg, InteractiveStars, TextBox, InputBox, InputEmail, StyledButton } from '../../Styles.styled.js';
import Axios from 'axios';

const Form1 = ({ relatedId, form1, setForm1, incPage }) => {
  let product = useContext(UserContext)
  let name = product.currentPD.name

  const [urls, setUrls] = useState([])
  const [cloud, setCloud] = useState([])
  const [count, setCount] = useState(50)
  var handleForm1Inputs = (e) => {
    e.preventDefault()
    let arr = []
    let list = document.getElementsByName('rating')
    for (let i = list.length - 1; i >= 0; i--) {
      arr.push(list[i].checked)
    }
    incPage()
    setForm1({
      product_id: relatedId,
      rating: 1 + arr.indexOf(true),
      recommend: e.target[5].checked,
      name: e.target[6].value,
      summary: e.target[8].value,
      body: e.target[9].value,
      email: e.target[7].value,
      photos: cloud,
      characteristics: {}
    })
  }

  return (
    <form onSubmit={(e) => handleForm1Inputs(e)}>
      <h1>Write a review for {name}</h1>
      <label>Your overall rating*
        <InteractiveStars>
          <span className="star-cb-group">
            {[1, 2, 3, 4, 5].map(t => {
              return (
                <>
                  <input type="radio" id={`rating-${t}`} name="rating" value={t} defaultChecked={form1.rating === t ? true : false} required />
                  <label for={`rating-${t}`}>{t}</label>
                </>
              )
            })}
          </span>
        </InteractiveStars>
      </label>
      <label><input type='checkbox' defaultChecked={form1.recommend ? true : false}></input>I recommend this product!</label>
      <br />
      <div style={{ marginTop: '20px', display: 'flex' }}>
        <label style={{ width: '300px' }}>Username*
          <InputBox defaultValue={form1.name} required />
          <small style={{ fontSize: '11px', color: 'grey' }}>For privacy reasons, do not use your full name or email address</small>
        </label>
        <br />
        <label style={{ marginLeft: '20px', width: '300px' }}>Email*
          <InputEmail defaultValue={form1.email} required />
          <small style={{ fontSize: '11px', color: 'grey' }}>For authentication reasons, you will not be emailed</small>
        </label>
      </div>
      <br />
      <label >Review summary*
        <InputBox style={{ marginBottom: '20px' }} placeholder="Example: Best purchase ever!" defaultValue={form1.summary} maxLength="60" required />
      </label>
      <br />
      <label>Review description*</label>
      <div style={{ marginBottom: '20px' }}>
        <TextBox onChange={(e) => {
          setCount(50 - e.target.value.length)
        }} placeholder="Why did you like the product or not?" defaultValue={form1.body} minLength="50" required />
        <small style={{ marginBottom: '20px', fontSize: '11px', color: 'grey' }}>{count <= 0 ? 'Minimum reached' : `Minimum required characters left: ${count}`} </small>
      </div>
      {
        urls.length < 5 ?
          <>
            <br />
            <input type="file" id='addImg' multiple="multiple" accept="image/png, image/jpeg" onChange={(e) => {
              const formData = new FormData()
              formData.append("file", e.target.files[0])
              formData.append("upload_preset", 'ynislmn9')

              Axios.post("https://api.cloudinary.com/v1_1/djtk4ap6i/image/upload", formData)
                .then((data) => {
                  setCloud([...cloud, data.data.secure_url])
                })
                .catch(err => console.log(err))
              setUrls([...urls, URL.createObjectURL(e.target.files[0])])
            }}
              disable={urls.length === 5 ? true : false} hidden />
            <AddImg for='addImg'>UPLOAD IMAGES</AddImg>
          </>
          : null
      }
      <br />
      <div style={{ marginTop: '20px', display: 'flex', alignItems: 'flex-end' }}>
        {urls.length !== 0 ?
          urls.map((t, i) => {
            return (
              <div style={{ margin: '10px', position: 'relative', width: '80px', height: '80px' }}>
                <img
                  src={t}
                  height="80"
                  width="80"
                  border='2px solid #888'
                  margintop='20px'
                  alt="header image"
                />
                <div style={{ cursor: 'pointer', textShadow: '1px 1px 1px white, -1px -1px 1px white,2px 2px 5px white, -2px -2px 5px white,1px 1px 5px white', position: 'absolute', top: '5%', left: '80%' }} onClick={() => {
                  let ind = urls.indexOf(t)
                  let n = urls.slice()
                  n.splice(ind, 1)
                  setUrls(n)
                }}>x</div>
              </div>
            )
          })
          : null}
      </div>
      <br />
      <div style={{ margintop: '20px', display: 'flex', flexDirection: 'row-reverse' }}>
        <br />
        <StyledButton>NEXT PAGE</StyledButton>
      </div>
      <br />
    </form >
  )
}

export default Form1;