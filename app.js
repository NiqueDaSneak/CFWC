'use strict'

//DEPENDENCIES
const express = require('express');
const app = express();
var server = require('http').createServer(app);
const io = require('socket.io')(server);
const db = require('diskdb');
db.connect('db', ['users']);
const users = require('./db/users');

app.use(express.static('public'));
app.set('json spaces', 4);

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/privacy_policy', function(req,res){
  res.render('privacy_policy');
});

app.get('/terms_of_use', function(req,res){
  res.render('terms_of_use');
});

app.get('/emails', function(req,res){
  res.json(users)
});

// SOCKET
io.on('connection', (socket) => {
  console.log('Client connected!');
  socket.on('newUser', (user) => {
    user.user.date = Date()
    db.users.save(user.user)
    console.log('User saved!');
  });
});

// SET UP SERVER ENVIRONMENT
var port = process.env.PORT || 3000;
server.listen(port, function(){
    console.log('Server running on port ' + port);
});

app.on('error', function(){
    console.log(error);
});

module.exports = app;
