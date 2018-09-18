// import chartData from '../app.js';

let ctx = document.getElementById("yelpChart").getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Helvetica Neue';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#888';

let yelpChart = new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Businesses',
      data: [{
        x: 24,
        y: 3.2
      }, {
        x: 5,
        y: 4.3
      }, {
        x: 10,
        y: 4.8
      }, {
        x: 4,
        y: 2.3
      }, {
        x: 7,
        y: 4.1
      }],
      pointRadius: 5,
      pointStyle: 'rectRounded',
      pointHitRadius: 6,
      backgroundColor: 'red',
      borderWidth: 1,
      borderColor: 'red',
      hoverBorderWidth: 2,
      hoverBorderColor: '#777'
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Businesses nearby',
      fontSize: 24,
      lineHeight: 1.4,
      padding: 10
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Distance (mi)',
        },
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
            return value + ' ⭐';
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
      enabled: true
    },
    layout: {
      padding: {
        top: 5,
        right: 30,
        bottom: 15,
        left: 20
      }
    }
  }
});

export default yelpChart;
