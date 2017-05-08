var express =require('express');

//create your app
var app=express();

//tell express which folder to server exposing the folder to webserver
app.use(express.static('public'));

var portnumber=3000;

app.listen(portnumber,function () {
    var port=portnumber;
    console.log(`Express server is up on port:${port}`)
});
