const axios = require('axios');
import yelpChart from './chart.js';

import '../assets/stylesheets/index.scss';

const formInput = form => ({
  term: form[0].value,
  location: form[1].value
});

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById("search-form");
  
  document.addEventListener("submit", e => {
    e.preventDefault();
    const searchParams = formInput(searchForm); 

    // let searchRequest = JSON.stringify(searchParams); 


    // axios config.params 

    // axios.get(`/search`, { 
    //   params: searchParams 
    // }) // pass searchParams into string interp? 
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch(function (err) {
    //   console.log(err);
    // });

    // axios config.data

    axios({
      method: 'post',
      url: '/search',
      data: searchParams
    })
    .then((response) => {
      console.log(response.get(data));
    })
    .catch(function (err) {
      console.log(err);
    });

    // send response data to chart.js 
    // render resulting chart 

    // let isbn = '0201558025';
    // axios.get(`/books/${isbn}`)
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    
  });
});
      

