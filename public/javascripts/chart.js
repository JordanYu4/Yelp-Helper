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
            let distance = business.distance;
            let price = business.price;
            return [
              "Rating: " + business.rating,
              "Price: " + price,
              "Distance: " + distance + " mi"
            ];
          }
        }

        // Disable the on-canvas tooltip
        // enabled: false,

        // custom: function(tooltipModel) {
        //   // Tooltip Element
        //   var tooltipEl = document.getElementById("chartjs-tooltip");

        //   // Create element on first render
        //   if (!tooltipEl) {
        //     tooltipEl = document.createElement("div");
        //     tooltipEl.id = "chartjs-tooltip";
        //     tooltipEl.classList.add("tooltip");

        //     tooltipEl.innerHTML = "<table></table>";
        //     document.body.appendChild(tooltipEl);
        //   }

        //   // Hide if no tooltip
        //   if (tooltipModel.opacity === 0) {
        //     tooltipEl.style.opacity = 0;
        //     return;
        //   }

        //   // Set caret Position
        //   tooltipEl.classList.remove("above", "below", "no-transform");
        //   if (tooltipModel.yAlign) {
        //     tooltipEl.classList.add(tooltipModel.yAlign);
        //   } else {
        //     tooltipEl.classList.add("no-transform");
        //   }

        //   function getBody(bodyItem) {
        //     return bodyItem.lines;
        //   }

        //   // Set Text
        //   if (tooltipModel.body) {
        //     var titleLines = tooltipModel.title || [];
        //     var bodyLines = tooltipModel.body.map(getBody);

        //     var innerHtml = "<thead>";

        //     titleLines.forEach(function(title) {
        //       innerHtml += "<tr><th>" + title + "</th></tr>";
        //     });
        //     innerHtml += "</thead><tbody>";

        //     bodyLines.forEach(function(body, i) {
        //       var colors = tooltipModel.labelColors[i];
        //       var style = "background:" + colors.backgroundColor;
        //       style += "; border-color:" + colors.borderColor;
        //       style += "; border-width: 2px";
        //       var span = '<span style="' + style + '"></span>';
        //       innerHtml += "<tr><td>" + span + body + "</td></tr>";
        //     });
        //     innerHtml += "</tbody>";

        //     var tableRoot = tooltipEl.querySelector("table");
        //     tableRoot.innerHTML = innerHtml;
        //   }

        //   // `this` will be the overall tooltip
        //   var position = this._chart.canvas.getBoundingClientRect();

        //   // Display, position, and set styles for font
        //   tooltipEl.style.opacity = 1;
        //   tooltipEl.style.position = "absolute";
        //   tooltipEl.style.left = position.left + tooltipModel.caretX + "px";
        //   tooltipEl.style.top = position.top + tooltipModel.caretY + "px";
        //   tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        //   tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
        //   tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        //   tooltipEl.style.padding =
        //     tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
        // }
      }
    }
  });

  function navToBusiness(e) {
    let businessPoint = chart.getElementsAtEvent(e)[0];
    console.log(businessPoint);
    if (businessPoint) {
      let yelpLink = chart.data.datasets[0].businesses[businessPoint._index].url;
      console.log(yelpLink);
      window.open(yelpLink, '_blank');
    }
  }

  return chart;
}


export default chartBuilder;