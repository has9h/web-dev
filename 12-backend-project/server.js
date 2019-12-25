// console.log('Hello World');
// Require:
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');

// Using modules
var app = express();          //Init app
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Bring in Models:
var Article = require('./models/article');

// Database Connection
mongoose.connect('mongodb://localhost/nodekb');
var db = mongoose.connection;
// Check connection:
db.once('open', function(){
  console.log("Mongoose Connected to MongoDB");
});
// Check for Database errors:
db.on('error', function(err){
  console.log(err);
});

// Setting up views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set public/static folder:
app.use(express.static(path.join(__dirname, 'static')));

// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// Express Messages Middleware:
// Setting a global variable messages to the express-messages module:
app.use(require('connect-flash')());
app.use(function(request, response, next){
  response.locals.messages = require('express-messages')(request, response);
  next();
});

// Express Validator Middleware:
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;

    while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Routes:
// Home Route:
app.get('/', function(request, response){
  // response.send('Hello World');
  // Finding all articles:
  Article.find({}, function(error, articles){
    if(error){
      console.log(error);
    } else{
      response.render('index', {
        title: 'Articles',
        articles: articles
      });
    }
  });
});

// Route files:
var articles = './routes/articles';
app.use('/articles', articles);

// Listen:
app.listen('3000', function(){
  console.log('Server started on port 3000');
});
