'use strict';

const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 3000; // process.env accesses heroku's environment variables
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

const yelp = require('yelp-fusion');
const apiKey = 'huQiSGsewH8ew7hJEyRu_PWL0x9Syg2tWgL9R3fe7eF0XlfKkfkcHexE16XOBWssNWOrhiibXeHQsVAY5TLVnxh2XHtdIbhq9Zr08HuZQuz1xZqIRBsB8vG90ER8W3Yx'
const client = yelp.client(apiKey);

// client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const cleanJson = JSON.stringify(firstResult, null, 4);
//   console.log(cleanJson);
// }).catch(err => {
//   console.log(err);
// });

app.get('/search', (request, response) => {

  console.log('request', request);
  // let searchParams = JSON.parse(request.params);

  //TESTING BEGIN
  let testParams = {
    term: 'cafe',
    location: 'san francisco, ca'
  };
  // TESTING END
  console.log(testParams);
  client.search(testParams) //yelp fusion method compatibility issue?
  .then((response) => {
    return response.text();
  }).then((body) => {
    let results = JSON.parse(body);
    console.log(results);
    response.send(results);
  });
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})

/////////////////////////////

// create route to get single book by its isbn
app.get('/books/:isbn', (request, response) => {
  // make api call using fetch
  fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${request.params.isbn}&format=json&jscmd=data`)
  .then((response) => {
      return response.text();
  }).then((body) => {
      let results = JSON.parse(body)
      console.log(results)   // logs to server
      response.send(results) // sends to frontend
    });
});
