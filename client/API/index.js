const axios = require('axios');
const config = require('../../config.js');
const headers = {
  'Authorization': config.TOKEN
}

const axiosRequest = function (options, callback) {
  axios(options)
    .then((response) => {
      callback(null, response.data)
    })
    .catch(err => {
      callback(err)
    })
}

module.exports = {
  getProducts: function (callback) {
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
      method: 'GET',
      headers,
    };
    axiosRequest(options, callback);
  },
  getProductInformation: function (id, callback) {

    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
      method: 'GET',
      headers,
    };
    axiosRequest(options, callback);
  },
  getProductStyles: function (id, callback) {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
      method: 'GET',
      headers,
    };
    axiosRequest(options, callback);
  },
  getRelatedProducts: function (id, callback) {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`,
      method: 'GET',
      headers,
    };
    axiosRequest(options, callback);
  },
  getReviews: function (obj, callback) {
    let options = {
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?',
      params: obj,
      headers,
    };
    axiosRequest(options, callback);
  },
  createReview: function (obj, callback) {
    console.log('createReview obj: ', obj)
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', obj, { headers: headers })
      .then(() => this.getReviews())
      .catch(err => console.log(err))
  },
  editHelpful: function (id, callback) {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/helpful`, { headers: headers })
      .then(() => this.getReviews())
      .catch(err => console.log(err))
  },
  getCart: function (callback) {
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
      method: 'GET',
      headers,
    };
    axiosRequest(options, callback);
  },
  addToCart: function (obj, callback) {
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
      method: 'POST',
      data: obj,
      headers,
    };
    axiosRequest(options, callback);
  },
  postInteraction: function (obj, callback) {
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions',
      method: 'POST',
      data: obj,
      headers,
    };
    axiosRequest(options, callback);
  },
  getReviewsMeta: function (obj, callback) {
    let options = {
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?',
      params: obj,
      headers,
    };
    axiosRequest(options, callback);
  },
}

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/related