var express = require('express');
var router = express.router();

// Bring in Models:
var Article = require('../models/article');

// Add Article Route:
router.get('/articles/add', function(request, response){
  response.render('add-article', {
    title: 'Add Article'
  });
});

// Add Submit POST Route
router.post('/articles/add', function(request, response){
  request.checkBody('title', 'Title is required').notEmpty();
  request.checkBody('author', 'Author is required').notEmpty();

  // Get errors:
  var errors = request.validationErrors();
  if(errors){
    response.render('add-article', {
      title: 'Add Article',
      errors: errors
    });
  } else {
    var article = new Article();
    article.title = request.body.title;             //This is where bodyParser is needed
    article.author = request.body.author;
    article.body = request.body.body;

    article.save(function(error){
      if(error){
        console.log(error);
        return;
      } else {
        request.flash('success', 'Article Added');
        response.redirect('/');
      }
    });
  }
  // console.log('Submitted');
  // return;
});

// Load Edit Form:
router.get('/article/edit/:id', function(request, response){
  Article.findById(request.params.id, function(error, article){
    response.render('edit-article', {
      title: 'Edit Article',
      article: article
    });
    // console.log(article);
    // return;
  });
});

// Update Submit POST route:
router.post('/articles/edit/:id', function(request, response){
  var article = {};
  article.title = request.body.title;             //This is where bodyParser is needed
  article.author = request.body.author;
  article.body = request.body.body;

  var query = {_id:request.params.id};

  Article.update(query, article, function(error){
    if(error){
      console.log(error);
      return;
    } else {
      request.flash('success', 'Article Updated');
      response.redirect('/');
    }
  });
  // console.log('Submitted');
  // return;
});

// Delete request route
router.delete('/article/:id', function(request, response){
  var query = {_id:request.params.id}

  Article.remove(query, function(error){
    if(error){
      console.log(error);
    }
    response.send('Success');
  });
});

// This one's order matters apparently
// Get single article:
router.get('/article/:id', function(request, response){
  Article.findById(request.params.id, function(error, article){
    // console.log(article);
    // return;
    response.render('article', {
      article: article
    });
  });
});

module.exports = router;
