const axios = require('axios');
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
  const chartContainer = document.getElementById("chart-container");
  const searchResults = document.getElementsByClassName("search-results-hidden")[0];
  const resultsList = document.getElementById("results-list");
  const yelpChart = chartBuilder(chartPoints);
  
  document.addEventListener("submit", async function(e) {
    e.preventDefault();
    chartContainer.className = "chart-container-sharing";
    searchResults.classList.remove("search-results-hidden");
    searchResults.classList.add("search-results-revealed");

    resultsList.innerHTML = '';
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

    for (let i = 0; i < businessData.length; i++) {
      let business = businessData[i];

      let point = { 
        x: ((business.distance / 1000) * 0.621371).toFixed(2), 
        y: business.rating 
      };
      chartPoints.push(point);

      let listItem = document.createElement("li");
      listItem.setAttribute("id", i);

      let itemBody = document.createElement("a");
      let itemTitle = document.createElement("h1");
      itemTitle.appendChild(document.createTextNode(`${business.name}`));
      itemBody.setAttribute("href", `${business.url}`);
      itemBody.setAttribute("target", "_blank");

      // let linkPic = document.createElement("a");
      // linkPic.setAttribute("href", `${business.url}`);
      // linkPic.setAttribute("target", "_blank");

      let photo = document.createElement("i");
      photo.setAttribute(
        "style", `background-image: url(${business.image_url})`
      );
      // linkPic.appendChild(photo);

      listItem.appendChild(photo);
      itemBody.appendChild(itemTitle);
      itemBody.appendChild(document.createTextNode(
        `Rating: ${business.rating}`));
      itemBody.appendChild(document.createElement("br"));
      let distance = ((business.distance / 1000) * 0.621371).toFixed(2);
      itemBody.appendChild(document.createTextNode(
        `Distance: ${distance} mi`));
      listItem.appendChild(itemBody);
      resultsList.appendChild(listItem);
    }

    searchResults.setAttribute("style", "display: block");

    yelpChart.data.datasets[0].data = chartPoints;
    yelpChart.data.datasets[0].businesses = businessData;
    yelpChart.options.scales.xAxes[0].ticks.max = maxDistance(chartPoints);
    yelpChart.update();
  });
});
      