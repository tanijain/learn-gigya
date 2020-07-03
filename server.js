var express = require('express');
var path = require('path');

var app = express();

require('./route')(app);


app.listen(process.env.PORT || 5000);

console.log('Application is running on port 8080');