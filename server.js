var express = require('express');
var path = require('path');

var app = express();

require('./route')(app);


app.listen(3000);
console.log('Server running at http://localhost:3000/');