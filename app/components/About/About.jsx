var React = require('react');

// A stateless component
var About = (props) => {
  return(
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a simple Weather application(yes another one) built with ReactJS.</p>
        <p>Here are links to the tools used :)</p>
        <ul>
          <li><a href="https://facebook.github.io/react/">React</a> for the Front End JS framework</li>
          <li><a href="https://nodejs.org/en/">NodeJS</a> for the Back End</li>
          <li><a href="http://foundation.zurb.com/">Foundation</a> as the CSS framework of choice</li>
          <li><a href="https://atom.io/">Atom</a> for Code Editing</li>
          <li><a href="http://openweathermap.org/">OpenWeatherMap</a> to get weather data by city.</li>
        </ul>
      </div>
  );
};

module.exports = About;
