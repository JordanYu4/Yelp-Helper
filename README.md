# YelpAnalytics - an economic data visualization tool  

## Background and Overview

A simple glance at the average Yelp rating of a restaurant or business provides a helpful, but limited understanding of its quality of service. The restaurant industry is especially notorious for its unpredictability, with even well-rated establishments being nonetheless vulnerable to the vicissitudes of market and social trends.

YelpAnalytics provides a more in depth representation of a business' popularity and average rating over time, thereby enabling users to make more accurate projections of a business' growth trajectory.

## Functionality & MVP

In YelpAnalytics, users will be able to:

- [ ] Search for a business by location and category, identical to the Yelp search function
- [ ] Select data visualization for the given business' number of ratings per month or year
- [ ] Select data visualization for the given business' average rating over time
- [ ] Vary the time period over which the data visualization is displayed, by date and duration (e.g. August 2013 - February 2015)

## Wireframes

The app will consist of a single page with the business search sidebar, graphing canvas, and navigation links to the project Github as well as my LinkedIn.  

The search sidebar will be identical in function and aesthetic to the Yelp search bar.

The graphing canvas will include dropdown selection menus for both the graph display options (i.e. review frequency or average rating), and the graphed time period (i.e. start and end times).

![wireframe](https://github.com/JordanYu4/yelp_analytics/blob/master/wireframes/yelp_analytics_lite.png)

## Architecture and Technologies

The project will be implemented with the following technologies:

* Vanilla JavaScript for overall structure and logic,
* `HTML5 Canvas` and `D3` libraries for DOM manipulation and rendering,
* Webpack to bundle and serve the necessary scripts

The application structure and logic will be contained within the following scripts:

`board.js`: this script will handle the logic for creating and rendering the required DOM elements

`search.js`: this script will handle the logic for searching for buinesses  

`extract.js`: this script will handle requesting the necessary data from the Yelp APIs and pass it on to the graphing logic  

`graph.js`: this script will handle the logic for creating and rendering the requested graph

## Implementation Timeline

**Day 1:** Finalize project proposal and research the necessary API technologies. Goals for the day:

- [ ] Set up Yelp Fusion and GraphQL APIs

**Day 2:** Set up necessary Node modules (including webpack). Create a `webpack.config.js` and a `package.json`. Write an entry file and set up boilerplate for the aforementioned scripts. Goals for the day:

- [ ] Get `webpack` serving files and set up index.html
- [ ] Become familiar enough with `Canvas` to render a basic graph
- [ ] Set up a simple Node backend
- [ ] Become familiar with making requests to the Yelp Fusion and GraphQL APIs

**Day 3:** Create the logic backend. Goals for the day:

- [ ] Port over the Yelp API search function and build the necessary logic in `search.js` to integrate it into the app
- [ ] Build the necessary logic in `extract.js` to render the API response usable by the graph
- [ ] Build the necessary logic in `graph.js` to provide a rough representation of a business' review data

**Day 4:** Install graph options to provide custom data visualization. Style the frontend, making it clean and professional. Goals for the day:

- [ ] Create dropdown menus for data options and time periods
- [ ] Complete styling for `Canvas`, with intuitive controls and title

## Bonus Features

- [ ] Integrate with the Google Maps API in order to represent shifts in business performance by neighborhood and city.
