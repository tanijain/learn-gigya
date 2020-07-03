var path = require('path');

module.exports = function(app){

    app.get('/Application1', function(req, res) {
    res.sendFile(path.join(__dirname + '/Application1/index.html'));
    });

    app.get('/Application2', function(req, res) {
        res.sendFile(path.join(__dirname + '/Application2/index.html'));
    });

    app.get('/RelyingParty', function(req, res) {
        res.sendFile(path.join(__dirname + '/RelyingParty/index.html'));
    });
    
    app.get('/Proxy', function(req, res) {
        res.sendFile(path.join(__dirname + '/OIDC/proxy.html'));
    });

}