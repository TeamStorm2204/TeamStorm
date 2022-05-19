const axios = require('axios');
// require("dotenv").config();
const config = require('../../config.js');

const headers = {
  'User-Agent': 'request',
  'Authorization': config.TOKEN
}

const axiosRequest = function (options, callback) {
  axios(options)
    .then((response) => {
      console.log('response: ', response.data)
      callback(null, response.data)
    })
    .catch(err => {
      console.log(err)
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
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/:product_id',
      method: 'GET',
      params: { product_id: id },
      headers,
    };
    axiosRequest(options, callback);
  },
  getProductStyles: function (callback) {
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/:product_id/styles',
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
  getReview: function (obj, callback) {
    let options = {
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
      params: obj,
      headers,
    };
    axiosRequest(options, callback);
  },
  createReview: function (obj, callback) {
    let options = {
      method: 'POST',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
      data: obj,
      headers,
    };
    axiosRequest(options, callback);
  },
  editReview: function (obj, callback) {
    let options = {
      method: 'PUT',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
      data: obj,
      headers,
    };
    axiosRequest(options, callback);
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

}

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/related