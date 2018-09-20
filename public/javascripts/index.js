const axios = require('axios');
import chartBuilder from './chart.js';

import '../assets/stylesheets/index.scss';

const formInput = form => ({
  term: form[0].value,
  location: form[1].value
});

const chartPoints = [];

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById("search-form");
  let yelpChart = chartBuilder(chartPoints);
  
  document.addEventListener("submit", async function(e) {
    e.preventDefault();
    const searchParams = formInput(searchForm); 
    let businessData = [];

    let response = await axios({
      method: 'post',
      url: '/search',
      data: searchParams
    })

    for (let i = 0; i < response.data.length; i++) {
      businessData.push(response.data[i]);
    }

    console.log("businessData:", businessData);

    for (let i = 0; i < businessData.length; i++) {
      let business = businessData[i];
      let point = {
        x: (business.distance / 1000).toFixed(2),
        y: business.rating
      };
      chartPoints.push(point);
    }

    console.log("chartPoints:", chartPoints);
    
    yelpChart = chartBuilder(chartPoints);
  });
});
      