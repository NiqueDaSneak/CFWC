'use strict'

//DEPENDENCIES
const express = require('express');
const app = express();

var server = require('http').createServer(app);
const io = require('socket.io')(server);

const db = require('diskdb');
db.connect('db', ['users']);
const users = require('./db/users');

const contentful = require('contentful')
const SPACE_ID = '91uae8dux59i'
const ACCESS_TOKEN = '449aaeea181c81351d565c1fa14580ac9d66e719926a3b66440e171e0cdb4563'
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

app.use(express.static('public'));
app.set('json spaces', 4);

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/privacy_policy', (req, res) => {
  res.render('privacy_policy')
});

app.get('/terms_of_use', (req, res) => {
  res.render('terms_of_use')
});

app.get('/tickets', (req, res) => {
  var content = []
  var imgs = []
  client.getEntries()
  .then((response) => {
      for (var i = 0; i < response.items.length; i++) {
          if (response.items[i].sys.contentType.sys.id === 'tickets') {
              content.push(response.items[i].fields)
              imgs.push(response.items[i].fields.photoOrGraphic.fields.file.url.substring(2))
              console.log(response.items[i].fields.photoOrGraphic.sys.id)
          }
      }
      res.render('tickets', {content: content, imgs: imgs})
  })
  .catch(console.error)
})

app.get('/emails', (req, res) => {
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
