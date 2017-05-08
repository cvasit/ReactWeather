var React=require('react');

var WeatherForm=require('WeatherForm');

var WeatherMessage=require('WeatherMessage');

var OpenWeatherMap=require('OpenWeatherMap');

var Weather = React.createClass({

    getInitialState:function(){
        return {
            isLoading:false
        };
    },

    handleSearch:function (cityName) {

        this.setState({isLoading:true});

        let that=this;
        OpenWeatherMap.getTemp(cityName).then(function (temp) {
            that.setState({
                location:cityName,
                temp:temp,
                isLoading:false
            });
        },function (errMessage) {
            that.setState({isLoading:false});
        });
    },

    render: function () {
        var {isLoading,temp,location}=this.state;
        function  renderMessage() {
            if(isLoading){
                return<h3>Fetching weather data</h3>
            }
            else if(temp && location)
            {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
