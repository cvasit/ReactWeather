var axios=require('axios');

//Api path is a bit different than what was in the tutorials
var myUrl="http://api.openweathermap.org/data/2.5/weather?appid=12da8aa133b3a1c1621683e660e981a1&units=imperial";

const OPEN_WHEATHER_MAP_URL=myUrl;

module.exports={

    getTemp:function (location) {

        var encodedLocation=encodeURIComponent(location);

        var requestUrl= `${OPEN_WHEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            debugger;
            if(res.data.cod && res.data.message) {
                throw  new Error('Unable to fetch weather data');
            }
            else {

                return res.data.main.temp;
            }
        },function (res) {
            throw new Error(res.data.message);
        });
    }
}