const axios = require('axios');
import yelpChart from './chart.js';

import '../assets/stylesheets/index.scss';

const searchInput = form => ({
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
    const newSearch = searchInput(searchForm); // declare as var outside of DOMContentLoaded?
    console.log(newSearch);

    // $.ajax({
      //   url: "/yelp",
      //   type: "get",
      //   success: response => {
        //     console.log("Retrieving response...");
        //     return response;
        //   }
    // });

  });

});
      
    // chart rendering logic?
    
    // let searchParams = {
    //   term: 'four barrel coffee',
    //   location: 'san francisco, ca'
    // };

    // let searchRequest = JSON.stringify(searchParams);

    // let term = '';
    // let location = '';
    // let latitude = '';
    // let longitude = '';
    // let radius = '';
    // let open_now = '';
    // const limit = 10;

    // axios.get(`/search`, searchRequest)
    // .then((response) => {
    //     console.log(response);
    // })
    // .catch(function (err) {
    //     console.log(err);
    // });
