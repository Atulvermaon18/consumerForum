var express = require('express');
var app = express();
var db = require('./db');
var logger = require('morgan');
var cors = require('cors');


global.__root   = __dirname + '/'; 

app.use(cors())
app.use(logger('dev'));

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});


var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

var ForumController = require(__root + 'forum/ForumController');
app.use('/api/forum', ForumController);

module.exports = app;