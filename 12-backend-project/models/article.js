var mongoose = require('mongoose');

// Article Schema
var articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body:{
    type: String
  }
});

var Article = module.exports = mongoose.model('Article', articleSchema);

// Schema Sample:

// var articles = [
//   {
//     id: 1,
//     title: 'Article One',
//     author: 'HH',
//     body: 'This is Article One'
//   },
//   {
//     id: 2,
//     title: 'Article Two',
//     author: 'HH',
//     body: 'This is Article One'
//   },
//   {
//     id: 3,
//     title: 'Article Three',
//     author: 'HH',
//     body: 'This is Article One'
//   }
// ];
