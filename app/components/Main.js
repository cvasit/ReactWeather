var React = require('react');

var Nav = require('Nav');

/*
var Main = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Main Component</h1>
                <Nav>From Main</Nav>
                {this.props.children}
            </div>
        );
    }
});
*/
var Main=(props)=>{
    return (
        <div>
            <h1>Main Component</h1>
            <Nav>From Main</Nav>
            {props.children}
        </div>
    );

}
module.exports = Main;
