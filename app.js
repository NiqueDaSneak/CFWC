'use strict'

//DEPENDENCIES
const express = require('express');

const app = express();

app.use(express.static('public'));

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

app.post('/emails', function(req,res){

});

// SET UP SERVER ENVIRONMENT
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Server running on port ' + port);
});

app.on('error', function(){
    console.log(error);
});

module.exports = app;
