var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));

require('./route')(app);
app.listen(process.env.PORT || 8080);

console.log('Application is running on port 8080');