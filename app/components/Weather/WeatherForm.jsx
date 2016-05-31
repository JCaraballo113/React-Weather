var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var location = this.refs.location.value;

        if(typeof location == 'string' && location.length > 0) {
          this.refs.location.value = '';
          this.props.onSearch(location);
        }
    },
    render: function () {
        return(
           <form onSubmit={this.onFormSubmit}>
             <input type="search" placeholder="Search weather by city" ref="location"/>
             <button className="button expanded hollow">Get Weather</button>
           </form>
        );
    }
});

module.exports = WeatherForm;