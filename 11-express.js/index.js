// console.log('Hello World');      //Test
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');         //Core module: The Path module provides a way of working with directories and file paths.

var app = express();

// Setting up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));      // To serve out static HTML template files using EJS

// Middleware: Functions used by routes
// The order of middelware is important: If this block was specified after the route handler, nothing would happen
var logger = function(request, response, next){
  console.log("Logging...");
  next();       //End this middleware and fire the next one
}

// To use the middelware:
app.use(logger);

// Body parser
// Middleware needs to be added to use body-parser:
app.use(bodyParser.json());     //To parse JSON content
app.use(bodyParser.urlencoded({
  extended: false;
}))

// Example to show that JSON can also be parsed: [Check app.get()]
var person = {
  name: 'Jeff',
  age: 30
}

var people = [
  {
    name: 'Jeff',
    age: 30
  },
  {
    name: 'Hodgins',
    age: 40
  },
  {
    name: 'Sarah',
    age: 20
  }
]

// Setting up routes

// Set static path:
app.use(express.static(path.join(__dirname, 'public')))   // Second parameter is the folder name

// Route handlers:
app.get('/', function(request, response){
  response.send('Hello World');     //Simply prints out; ideally you want to render a view
  response.json(person);
  response.json(people);
  // To serve the HTML using EJS, use response.render('filename'):
  response.render('index', {
    title: 'Customers'
  });
});

// To specify a port and listen to it
app.listen(3000, function(){
  console.log('Server started on Port 3000');
});
