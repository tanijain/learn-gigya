var express = require('express');
var path = require('path');

var app = express();

require('./route')(app);


app.listen(8080);
console.log('Application is running on port 8080');