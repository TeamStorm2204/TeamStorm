const axios = require('axios');

const headers = {
  'User-Agent': 'request',
  'Authorization': `token ${proccess.env.TOKEN}`
  }

const axiosRequest= function(options, callback) {
  return (
    axios(options)
      .then((response) => {
        callback(null, response.data)
      })
      .catch(err => {
        console.log(err)
        callback(err)
      }) 
  );
}

module.exports ={
    getProducts: function(callback) {
        let options = {  
            url:  'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
            method: 'GET',
            headers,
        };
        axiosRequest(options, callback);
    },
    getProductInformation: function(id, callback){
        let options = {  
            url:  'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/:product_id',
            method: 'GET',
            params: {product_id: id},
            headers,
        };
        axiosRequest(options, callback);
    },
    getProductStyles: function(callback){
        let options = {  
            url:  'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/:product_id/styles',
            method: 'GET',
            headers,
        };
        axiosRequest(options, callback);
    },
    getRelatedProducts: function(obj, callback){
        let options = {  
            url:  'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/:product_id/related',
            method: 'GET',
            params:{product_id:obj.id, },
            headers,
        };
        axiosRequest(options, callback);
    },
    getReview: function (obj, callback){
        let options = { 
          method: 'GET',
          url:  'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
          params: obj,
          headers,
        };
        axiosRequest(options, callback);
    },
    createReview: function (obj, callback){
        let options = { 
          method: 'POST',
          url:  'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
          data:obj,
          headers,
        };
        axiosRequest(options, callback);
    },
    editReview: function (obj, callback){
        let options = { 
            method: 'PUT',
            url:  'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
            data: obj,
            headers,
        };
        axiosRequest(options, callback);
    },
      getCart: function() {},
      postInteraction: function() {},

}

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/related