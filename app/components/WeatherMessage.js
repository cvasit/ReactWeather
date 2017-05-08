var React=require('react');


// var WeatherMessage = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <h3>Temperature at {this.props.location} is {this.props.temp}</h3>
//             </div>
//         );
//     }
// });

/*
var WeatherMessage=(props)=>{
    return (
        <div>
            <h3>Temperature at {props.location} is {props.temp}</h3>
        </div>
    );
};
*/
//Using destructuring

var WeatherMessage=({location,temp})=>{
    return (
        <div>
            <h3>Temperature at {location} is {temp}</h3>
        </div>
    );
};


module.exports = WeatherMessage;
