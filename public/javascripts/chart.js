import Chart from 'chart.js';

const chartBuilder = chartPoints => {
  let ctx = document.getElementById("yelpChart").getContext('2d');
  
  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Helvetica Neue';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#888';
  
  let chart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Businesses',
        data: chartPoints,
        pointRadius: 5,
        pointStyle: 'rectRounded',
        pointHitRadius: 6,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'red',
        hoverBorderWidth: 2,
        hoverBorderColor: '#777',
        businesses: []
      }]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          ticks: {
            beginAtZero: true,
            max: 25
          }
        }],
        yAxes: [{
          type: 'linear',
          position: 'left',
          ticks: {
            beginAtZero: true,
            max: 5,
            stepSize: 1,
            callback: function(value, index, values) {
              return value;
            }
          }
        }]
      },
      legend: {
        display: false,
        position: 'right',
        fontColor: '#000'
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            let idx = tooltipItem.index;
            let business = data.datasets[tooltipItem.datasetIndex].businesses[idx];
            return [
              business.name, 
              'Rating: ' + business.rating
            ];
          }
        }
      }
    }
  });

  return chart;
}

export default chartBuilder;