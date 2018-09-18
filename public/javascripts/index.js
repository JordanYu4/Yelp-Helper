const axios = require('axios');
import yelpChart from './chart.js';

import '../assets/stylesheets/index.scss';

document.addEventListener('DOMContentLoaded', () => {

    // let isbn = '0201558025';
    // axios.get(`/books/${isbn}`)
    // .then((response) => {
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

    let searchParams = {
      term: 'four barrel coffee',
      location: 'san francisco, ca'
    };

    // let term = '';
    // let location = '';
    // let latitude = '';
    // let longitude = '';
    // let radius = '';
    // let open_now = '';
    // const limit = 10;

    let searchRequest = JSON.stringify(searchParams);

    axios.get(`/search`, searchRequest)
    .then((response) => {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });

    ////////////////////////
    document.addEventListener("submit", e => {
      e.preventDefault();
      const searchForm = document.getElementById("search-form");
      const newSearch = searchInput(searchForm); // declare as var outside of DOMContentLoaded?
      $.ajax({
        url: "/yelp",
        type: "get",
        success: response => {
          console.log("Retrieving response...");
          return response;
        }
      });

      // chart rendering logic?

    });

    const searchInput = form => ({
      location: form[0].value,
      term: form[1].value
    });

})
