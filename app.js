'use strict'

const express = require('express');

var app = express();
app.set('views', __dirname + '/views');
app.engine('.haml', require('hamljs').renderFile);
