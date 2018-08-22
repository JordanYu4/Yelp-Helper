let ctx = document.getElementById("yelpChart").getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#888';

let yelpChart = new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Businesses',
      data: [{
        x: 20,
        y: 8
      }, {
        x: 5,
        y: 34
      }, {
        x: 10,
        y: 5
      }],
      pointRadius: 3,
      pointHitRadius: 4,
      backgroundColor: 'red',
      borderWidth: 1,
      borderColor: 'red',
      hoverBorderWidth: 2,
      hoverBorderColor: '#000'
    }]
  },
  options: {
    title: {
      display: true,
      text: 'YelpHelper',
      fontSize: 24
    },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        type: 'linear',
        position: 'left',
        ticks: {
          beginAtZero: true
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
        right: 5,
        bottom: 10,
        left: 10
      }
    }
  }
});

export default yelpChart;
