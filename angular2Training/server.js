var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport	= require('passport');
var config      = require('./config/database'); // get db config file
var User        = require('./app/models/user'); // get the mongoose model
var port        = process.env.PORT || 9123;
var jwt         = require('jwt-simple');
 
// Get our request parameters.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// Log to console
app.use(morgan('dev'));
 
// Use the passport package in our application.
app.use(passport.initialize());
 
// Demo Route (GET http://localhost:9123).
app.get('/', function(req, res) {
  res.send('Hello! The API is at http://localhost:' + port + '/api');
});
 
// Start the server.
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);