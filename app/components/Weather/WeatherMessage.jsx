var React = require('react');

// A stateless component
var WeatherMessage = ({temp, location}) => {
  return(
     <h2 className="text-center">It is {temp} in {location}</h2>
  );
};

module.exports = WeatherMessage;
