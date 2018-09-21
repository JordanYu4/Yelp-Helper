# YelpHelper - a tool for making faster decisions

## Background and Overview

Much time is spent clicking around a map of Yelp search results, figuring out which business is of good quality, while still being within a reasonable distance.

YelpHelper provides a data visualization of businesses plotted by their average rating versus distance to the user's current location, thereby enabling users to make more quicker, more informed decisions in which businesses they visit.

## Functionality & MVP

In YelpHelper, users will be able to:

- [ ] Search for a business by location and category, identical to the Yelp search function
- [ ] Select the maximum distance they are willing to travel
- [ ] Select plotted points to view business details

## Wireframes

The app will consist of a single page with the business search sidebar, graphing canvas, and navigation links to the project Github as well as my LinkedIn.  

The search sidebar will be identical in function and aesthetic to the Yelp search bar.

The graphing canvas will include include plotted points representing businesses. Selecting a point on the graph will open up a modal providing additional business details.

![wireframe](https://github.com/JordanYu4/yelp_analytics/blob/master/readme_graphics/yelp_analytics_lite.png)

## Architecture and Technologies

The project will be implemented with the following technologies:

* Vanilla JavaScript for overall structure and logic,
* `HTML5 Canvas` and `Chart.js` libraries for DOM manipulation and rendering,
* `Node` along with `Express` and `Axios` for a simple backend,
* `Webpack` to bundle and serve the necessary scripts

The application structure and logic will be contained within the following scripts:

`board.js`: this script will handle the logic for creating and rendering the required DOM elements

`search.js`: this script will handle the logic for searching for buinesses  

`extract.js`: this script will handle requesting the necessary data from the Yelp APIs and pass it on to the graphing logic  

`chart.js`: this script will handle the logic for creating and rendering the requested graph

## Implementation Timeline

**Day 1:** Finalize project proposal and research the necessary API technologies. Goals for the day:

- [ ] Set up Yelp Fusion and GraphQL APIs

**Day 2:** Set up necessary Node modules (including webpack). Create a `webpack.config.js` and a `package.json`. Write an entry file and set up boilerplate for the aforementioned scripts. Goals for the day:

- [x] Get `webpack` serving files and set up index.html
- [x] Become familiar enough with `Canvas` and `Chart.js` to render a basic graph
- [x] Set up a simple Node backend
- [ ] Become familiar with making requests to the Yelp Fusion and GraphQL APIs

**Day 3:** Create the logic backend. Goals for the day:

- [ ] Port over the Yelp API search function and build the necessary logic in `search.js` to integrate it into the app
- [ ] Build the necessary logic in `extract.js` to render the API response usable by the graph
- [ ] Build the necessary logic in `graph.js` to provide a rough representation of a business' review data

**Day 4:** Install graph options to provide custom data visualization. Style the frontend, making it clean and professional. Goals for the day:

- [ ] Complete styling for `Canvas`, with intuitive controls and title
- [ ] Clean up file tree

## Bonus Features

- [ ] Integrate the `D3` library in order to render more sophisticated dtat visualizations
