const axios = require('axios');
import Chart from 'chart.js';
import chartBuilder from './chart.js';

import '../assets/stylesheets/index.scss';

const formInput = form => ({
  term: form[0].value,
  location: form[1].value
});

let chartPoints = [];

const maxDistance = points => {
  if (points.length === 0) return 25;
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    let distance = points[i].x;
    if (distance > max) max = distance;
  }
  return Math.ceil(max);
};

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById("search-form");
  const yelpChart = chartBuilder(chartPoints);
  
  document.addEventListener("submit", async function(e) {
    e.preventDefault();
    const searchParams = formInput(searchForm); 
    let businessData = [];
    chartPoints = [];

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
    
    yelpChart.data.datasets[0].data = chartPoints;
    yelpChart.options.scales.xAxes[0].ticks.max = maxDistance(chartPoints);
    yelpChart.update();
    console.log(yelpChart);
  });
});
      