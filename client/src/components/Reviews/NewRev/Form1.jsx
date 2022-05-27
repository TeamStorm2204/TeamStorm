import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App.jsx';
import api from '../../../../API';
import { InteractiveStars, InputBox, InputEmail, StyledButton } from '../../Styles.styled.js';
import Axios from 'axios';

const Form1 = ({ form1, setForm1, incPage }) => {
  // let product = useContext(UserContext)
  let product = {
    currentPD: {
      id: 40350
    }
  }
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
      product_id: product.currentPD.id,
      rating: 1 + arr.indexOf(true),
      recommend: e.target[6].checked,
      name: e.target[7].value,
      summary: e.target[9].value,
      body: e.target[10].value,
      email: e.target[8].value,
      photos: cloud,
      characteristics: {}
    })
  }

  return (
    <form onSubmit={(e) => handleForm1Inputs(e)}>
      <h1>Write a review for {product.currentPD.name}</h1>
      <label>Your overall rating*
        <InteractiveStars>
          <span className="star-cb-group">
            {[0, 1, 2, 3, 4, 5].map(t => {
              if (t > 0) {
                return (
                  <>
                    <input type="radio" id={`rating-${t}`} name="rating" value={t} defaultChecked={form1.rating === t ? true : false} />
                    <label for={`rating-${t}`}>{t}</label>
                  </>
                )
              } else {
                return (
                  <>
                    <input type="radio" id="rating-0" name="rating" value="0" className="star-cb-clear" />
                    <label for="rating-0">0</label>
                  </>
                )
              }
            })}
            {/* <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" />
            <label for="rating-0">0</label>
            <input type="radio" id="rating-1" name="rating" value="1" />
            <label for="rating-1">1</label>
            <input type="radio" id="rating-2" name="rating" value="2" />
            <label for="rating-2">2</label>
            <input type="radio" id="rating-3" name="rating" value="3" />
            <label for="rating-3">3</label>
            <input type="radio" id="rating-4" name="rating" value="4" />
            <label for="rating-4">4</label>
            <input type="radio" id="rating-5" name="rating" value="5" />
            <label for="rating-5">5</label> */}
          </span>

        </InteractiveStars>
      </label>
      <br />
      <label><input type='checkbox' defaultChecked={form1.recommend ? true : false}></input>I recommend this product!</label>
      <br />
      <label>Username*
        <InputBox defaultValue={form1.name} required />
        <small>For privacy reasons, do not use your full name or email address</small>
      </label>
      <br />
      <label>Email*
        <InputEmail defaultValue={form1.email} required />
        <small>For authentication reasons, you will not be emailed</small>
      </label>
      <br />
      <label>Review summary*
        <InputBox placeholder="Example: Best purchase ever!" defaultValue={form1.summary} maxLength="60" required />
      </label>
      <br />
      <label>Review description*</label>
      <textarea onChange={(e) => {
        setCount(50 - e.target.value.length)
      }} placeholder="Why did you like the product or not?" style={{ width: '100%', height: '100px' }} defaultValue={form1.body} minLength="50" required />
      <small>{count <= 0 ? 'Minimum reached' : `Minimum required characters left: ${count}`} </small>
      <br />
      <label>Upload Images</label>
      <br />
      {urls.length < 5 ? <input type="file" multiple="multiple" accept="image/png, image/jpeg" onChange={(e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", 'ynislmn9')

        Axios.post("https://api.cloudinary.com/v1_1/djtk4ap6i/image/upload", formData)
          .then((data) => {
            console.log(data.data.secure_url)
            setCloud([...cloud, data.data.secure_url])
          })
          .catch(err => console.log(err))
        setUrls([...urls, URL.createObjectURL(e.target.files[0])])
      }}
        disable={urls.length === 5 ? true : false} /> : null}
      <br />
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        {urls.length !== 0 ?
          urls.map((t, i) => {
            return (
              <div style={{ position: 'relative', width: '100px', height: '120px' }}>
                <img
                  src={t}
                  width="100"
                  margintop='20px'
                  alt="header image"
                />
                <div style={{ position: 'absolute' }} onClick={() => {
                  let ind = urls.indexOf(t)
                  let n = urls.slice()
                  n.splice(ind, 1)
                  setUrls(n)
                }}>X</div>
              </div>
            )
          })
          : null}
      </div>
      <br />
      <div style={{ margintop: '20px', display: 'flex', flexDirection: 'row-reverse' }}>
        <br />
        <StyledButton>Next</StyledButton>
      </div>
      <br />
    </form >
  )
}

export default Form1;