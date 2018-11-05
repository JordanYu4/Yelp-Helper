const axios = require('axios');
import chartBuilder from './chart.js';
import listItemBuilder from './listItem.js';
import { minValue, maxDistance, formInput } from './util.js';
import '../assets/stylesheets/index.scss';

let chartPoints = [];

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById("search-form");
  const searchOptionsForm = document.getElementById("search-options-form");
  const valueOptionsForm = document.getElementById("value-options");
  const businessOptionsForm = document.getElementById("business-options");
  const chartContainer = document.getElementById("chart-container");
  const searchResults = document.getElementsByClassName("search-results-hidden")[0];
  const resultsList = document.getElementById("results-list");
  const yelpChart = chartBuilder(chartPoints);

  let optionState = formInput(searchOptionsForm);
  let businessData = [];

  async function executeSearch() {
    businessData = [];
    const searchParams = formInput(searchForm);
    const searchRequest = { searchParams, optionState };
  
    let response = await axios({
      method: 'post',
      url: '/search',
      data: searchRequest
    })
  
    for (let i = 0; i < response.data.length; i++) {
      businessData.push(response.data[i]);
    }

    console.log(response);
  }

  function renderSearch() {
    resultsList.innerHTML = '';
    chartPoints = [];
    
    for (let i = 0; i < businessData.length; i++) {
      let business = businessData[i];
      let businessValue;
      let { ratingOption, priceOption } = optionState;
      if (ratingOption && priceOption) {
        businessValue = business.rating / business.price.length; 
        yelpChart.options.scales.yAxes[0].scaleLabel.labelString = 'Rating & Affordability';
      } else if (ratingOption) {
        businessValue = business.rating;
        yelpChart.options.scales.yAxes[0].scaleLabel.labelString = 'Rating';
      } else if (priceOption) {
        businessValue = 5 - business.price.length;
        yelpChart.options.scales.yAxes[0].scaleLabel.labelString = "Affordability";
      } else {
        businessValue = business.rating;
      }
      
      let point = {
        x: business.distance,
        y: businessValue,
        url: business.url
      };
      chartPoints.push(point);
      
      let listItem = listItemBuilder(business, i);
      resultsList.appendChild(listItem);
    }
    
    yelpChart.data.datasets[0].data = chartPoints;
    yelpChart.data.datasets[0].businesses = businessData;
    yelpChart.options.scales.yAxes[0].ticks.min = minValue(chartPoints);
    yelpChart.options.scales.xAxes[0].ticks.max = maxDistance(chartPoints);
    yelpChart.update();
  };
  
  async function runSearch() {
    await executeSearch();
    renderSearch();
    chartContainer.className = "chart-container-sharing";
    searchResults.classList.remove("search-results-hidden");
    searchResults.classList.add("search-results-revealed");
  }
  
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    runSearch();
  });
  
  valueOptionsForm.addEventListener("change", e => {
    e.preventDefault();
    optionState = formInput(searchOptionsForm);
    let ratingOption = document.getElementById("rating-option");
    let priceOption = document.getElementById("price-option");
    if (!priceOption.checked) {
      ratingOption.checked = true;
      ratingOption.disabled = true;
    } else {
      ratingOption.disabled = false;
    }
    renderSearch();
  });

  businessOptionsForm.addEventListener("change", e => {
    e.preventDefault();
    optionState = formInput(searchOptionsForm);
    runSearch();
  });
});
      