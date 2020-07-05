var path = require('path');
var consentController = require("./Controller/consentController");

module.exports = function(app){

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
        });

    app.get('/Application1', function(req, res) {
    res.sendFile(path.join(__dirname + '/Application1/index.html'));
    });

    app.get('/Application2', function(req, res) {
        res.sendFile(path.join(__dirname + '/Application2/index.html'));
    });

    app.get('/RelyingParty', function(req, res) {
        res.sendFile(path.join(__dirname + '/RelyingParty/index.html'));
    });
    
    app.get('/proxy', function(req, res) {
        res.sendFile(path.join(__dirname + '/OIDC/proxy.html'));
    });

    app.get('/signConsent', consentController.signConsent);

}