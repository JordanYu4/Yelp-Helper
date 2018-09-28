const axios = require('axios');
import chartBuilder from './chart.js';
import listItemBuilder from './listItem.js';
import { minValue, maxDistance, formInput } from './util.js';
import '../assets/stylesheets/index.scss';

let chartPoints = [];

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById("search-form");
  const searchOptionsForm= document.getElementById("search-options-form");
  const chartContainer = document.getElementById("chart-container");
  const searchResults = document.getElementsByClassName("search-results-hidden")[0];
  const resultsList = document.getElementById("results-list");
  const yelpChart = chartBuilder(chartPoints);

  let optionState = formInput(searchOptionsForm);

  async function renderSearch(e) {
    e.preventDefault();
    chartContainer.className = "chart-container-sharing";
    searchResults.classList.remove("search-results-hidden");
    searchResults.classList.add("search-results-revealed");

    resultsList.innerHTML = '';
    const searchParams = formInput(searchForm);
    const searchRequest = { searchParams, optionState };
    let businessData = [];
    chartPoints = [];

    let response = await axios({
      method: 'post',
      url: '/search',
      data: searchRequest
    })

    for (let i = 0; i < response.data.length; i++) {
      businessData.push(response.data[i]);
    }

    for (let i = 0; i < businessData.length; i++) {
      let business = businessData[i];
      let businessValue;
      let { ratingOption, priceOption } = optionState;
      if (ratingOption && priceOption) {
        businessValue = business.rating / business.price.length; 
      } else if (ratingOption) {
        businessValue = business.rating;
      } else if (priceOption) {
        businessValue = 5 - business.price.length;
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
  
  searchForm.addEventListener("submit", async function(e) {
    renderSearch(e);
  });

  searchOptionsForm.addEventListener("change", function(e) {
    let ratingOption = document.getElementById("rating-option");
    let priceOption = document.getElementById("price-option");
    if (!priceOption.checked) {
      ratingOption.checked = true;
      ratingOption.disabled = true;
    } else {
      ratingOption.disabled = false;
    }
    optionState = formInput(searchOptionsForm);
    renderSearch(e);
  });
});
      