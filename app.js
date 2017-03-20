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

// SET UP SERVER ENVIRONMENT
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Server running on port ' + port);
});

app.on('error', function(){
    console.log(error);
});

module.exports = app;
