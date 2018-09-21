# YelpHelper

[Live Demo](http://yelp-helper.herokuapp.com/)

YelpHelper uses the `Yelp Fusion` API and `Chart.js` to enable users to make faster decisions by visualizing the distance versus rating of businesses of interest. Users can search for a business by keyword or category as they would in [Yelp](https://yelp.com), and YelpHelper will display the top ten search results along with a chart plotting the search result ratings relative to the respective businesses' distance from the user's current location.

YelpHelper is programmed in `JavaScript` and uses `Node.js` and `Express.js` for a simple backend, and `BodyParser` middleware to handle API responses.

This project was designed, built, and deployed within a one-week deadline. Additional enhancements will be added.

This README covers the following:
* [Features](https://github.com/JordanYu4/Yelp-Helper#features)
* [Project Design](https://github.com/JordanYu4/Yelp-Helper#project-design)
* [Technologies](https://github.com/JordanYu4/Yelp-Helper#technologies)
* [Future Features](https://github.com/JordanYu4/Yelp-Helper#future-features)

## Features

* Users can search for local businesses
* Users can select points on the data plot for more business details

### Seamless application aesthetic

As an application intended to complement the Yelp application. As such, it is important for YelpHelper's layout design to create in users a close mental association with the original Yelp application. Similar formatting, layout, color schemes, and fonts were utilized in styling YelpHelper in order to provide the least disruptive transition for the user.

## Project Design

The production focus of YelpHelper was building a minimal and clean user interface in a tool that would augment the larger Yelp application's efficiency of use. Much time is spent clicking around a map of Yelp search results, deliberating over which business is of good quality, while still being within a reasonable distance.

YelpHelper is intended to provide that same data in a more intuitive fashion, thereby enabling users to make more quicker, more informed decisions in which businesses they visit.

### Design Documents

Further details and design documents are available in the [development README](https://github.com/JordanYu4/Yelp-Helper/blob/master/README_development.md).

## Technologies

For frontend development hosting, Github pages was selected for its fast initialization and ease of deployment. For complete application hosting, Heroku is expected to be sufficient for the anticipated traffic.

`JavaScript` was selected for its versatility and compatibility with helpful middlewares such as `BodyParser`. `Node` and `Express` were chosen because of their simple backend initialization and extensive documentation. `Chart.js` was selected for data visualization due to its intuitive setup and its clean aesthetic.

## Future Features

* Increase minimum distance if less than ten businesses are within the standard 25 mile range
* Add "open now" search filter option
* Vary point opacity according to rating
* Replace `Yelp Fusion` with `Yelp GraphQL` API to optimize response efficiency
* Replace `Chart.js` with `D3` to explore more sophisticated data visualizations
