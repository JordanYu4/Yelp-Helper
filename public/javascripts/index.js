const axios = require('axios');
import yelpChart from './chart.js';

import '../assets/stylesheets/index.scss';

const formInput = form => ({
  term: form[0].value,
  location: form[1].value
});

document.addEventListener('DOMContentLoaded', () => {
  
  let isbn = '0201558025';

  axios.get(`/books/${isbn}`)
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  document.addEventListener("submit", e => {
    e.preventDefault();
    const searchForm = document.getElementById("search-form");
    const searchParams = formInput(searchForm); 
    console.log(searchParams);

    axios.get(`/search`, searchParams)
    .then((response) => {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });
  });
});
      
    // chart rendering logic?

    // let searchRequest = JSON.stringify(searchParams); 

