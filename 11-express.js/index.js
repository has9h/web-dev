// console.log('Hello World');      //Test
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');         //Core module

var app = express();

// Setting up routes
app.get('/', function(request, response){
  response.send('Hello World');     //Simply prints out; ideally you want to render a view
});

app.listen(3000, function(){
  console.log('Server started on Port 3000');
});
