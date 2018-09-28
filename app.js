'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const apiKey = require('./config/keys').apiKey;
const yelp = require('yelp-fusion');
const client = yelp.client(apiKey);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/search', (request, response) => {
  let dataSet = [];
  client.search(request.body).then(result => {
    let businesses = result.jsonBody.businesses;
    for (let i = 0; i <= 9; i++) {
      let { name, 
            image_url, 
            url, 
            rating, 
            price,
            distance,
            hours } = businesses[i]; 
      let business = {name, image_url, url, rating, price, distance, hours};
      business.distance = ((business.distance / 1000) * 0.6213).toFixed(2);
      dataSet.push(business);
    }
    response.send(dataSet);
  })
  .catch(err => {
    console.log(err);
  })
});

app.use(express.static("public"));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

// process.env accesses heroku's environment variables
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`Listening on ${PORT}`)
});
