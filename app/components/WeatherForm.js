var React=require('react');

var WeatherForm=React.createClass({

    onFormSubmit: function (e) {

        e.preventDefault();

        var cityName=this.refs.cityName.value;

        if(cityName.length!=0)
          this.props.onSearch(cityName);
    },

    render:function () {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="cityName" />
                <button>Get Weather</button>
            </form>
            </div>
        )
    }
});

module.exports =WeatherForm;
