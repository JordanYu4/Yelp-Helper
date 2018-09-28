import Chart from 'chart.js';

const chartBuilder = chartPoints => {
  let ctx = document.getElementById("yelpChart").getContext('2d');
  
  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Helvetica Neue';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#888';
  
  let chart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Businesses",
          data: chartPoints,
          pointRadius: 5,
          pointStyle: "rectRounded",
          pointHitRadius: 4,
          backgroundColor: "red",
          borderWidth: 1,
          borderColor: "red",
          hoverBorderWidth: 0,
          hoverBorderColor: "#777",
          businesses: []
        }
      ]
    },
    options: {
      responsive: true,
      responsiveAnimationDuration: 0.5,
      layout: {
        padding: {
          left: 10
        }
      },
      onClick: navToBusiness,
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom",
            ticks: {
              beginAtZero: true,
              max: 25
            }
          }
        ],
        yAxes: [
          {
            type: "linear",
            position: "left",
            ticks: {
              beginAtZero: false,
              max: 5,
              stepSize: 1,
              callback: function(value, index, values) {
                return value;
              }
            },
            scaleLabel: {
              display: true,
              labelString: 'Rating', 
              fontSize: 16,
              fontColor: 'rgb(90, 90, 90)',
              fontStyle: 'bold'
            }
          }
        ]
      },
      legend: {
        display: false
      },
      tooltips: {
        titleMarginBottom: 5,
        titleFontColor: "#D53A3F",
        bodyFontSize: 16,
        displayColors: false,
        xPadding: 10,
        yPadding: 10,
        callbacks: {
          title: function([tooltipItem], data) {
            let idx = tooltipItem.index;
            let business =
              data.datasets[tooltipItem.datasetIndex].businesses[idx];
            return [business.name];
          },
          label: function(tooltipItem, data) {
            let idx = tooltipItem.index;
            let business =
              data.datasets[tooltipItem.datasetIndex].businesses[idx];
            let price = business.price;
            return [
              "Rating: " + business.rating,
              "Price: " + (price ? price : 'unlisted'), 
              "Distance: " + business.distance + " mi"
            ];
          }
        }
      }, 
      hover: {
        onHover: function (e) {
          let point = this.getElementAtEvent(e)[0];
          if (point) e.target.style.cursor = 'pointer';
          else e.target.style.cursor = 'default';
        }
      }
    }
  });

  function navToBusiness(e) {
    let businessPoint = chart.getElementsAtEvent(e)[0];
    if (businessPoint) {
      let yelpLink = chart.data.datasets[0].businesses[businessPoint._index].url;
      window.open(yelpLink, '_blank');
    }
  }

  return chart;
}


export default chartBuilder;