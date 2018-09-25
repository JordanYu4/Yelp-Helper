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
          pointHitRadius: 6,
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
            }
          }
        ]
      },
      legend: {
        display: false,
        position: "right",
        fontColor: "#000"
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
            let distance = ((business.distance / 1000) * 0.621371).toFixed(2);
            let price = business.price;
            return [
              "Rating: " + business.rating,
              "Price: " + price,
              "Distance: " + distance + " mi"
            ];
          }
        }
      }
    }
  });

  return chart;
}

export default chartBuilder;