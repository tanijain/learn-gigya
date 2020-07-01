var express = require('express');
var path = require('path');

var app = express();

app.get('/Application1', function(req, res) {
    res.sendFile(path.join(__dirname + '/Application1/index.html'));
});

app.get('/Application2', function(req, res) {
    res.sendFile(path.join(__dirname + '/Application2/index.html'));
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');