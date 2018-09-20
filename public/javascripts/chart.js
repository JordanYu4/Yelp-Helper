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
        hoverBorderColor: '#777'
      }]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          ticks: {
            beginAtZero: true,
            max: maxDistance(chartPoints)
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
      }
    }
  });

  return chart;
}

const maxDistance = points => {
  if (points.length === 0) return 25;
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    let distance = points[i].x;
    if (distance > max) max = distance; 
    console.log(max);
  }
  return Math.ceil(max);
};

export default chartBuilder;