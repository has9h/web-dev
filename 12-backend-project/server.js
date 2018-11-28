// console.log('Hello World');
// Require:
var express = require('express');
var app = express();

// Routes:
app.get('/', function(){
  response.send('Hello World');
});

// Listen:
app.listen('3000', function(){
  console.log('Server started on port 3000');
});
