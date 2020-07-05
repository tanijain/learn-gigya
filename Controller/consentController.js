var crypto = require('crypto');
var base64js = require('base64-js');



    exports.signConsent = function(req, res) {
    
        if (req.query.consent || (req.body && req.body.consent)) {
            let hash;
    
            if (consent) {
                const decodedByteArray = base64js.toByteArray("e4BMPFX4lsBsONRz1Q8Z5LxNkbhHL/UcSrGP5iPWEso=");
                hash = crypto.createHmac('sha1', decodedByteArray).update(consent).digest('base64');
                hash = hash.replace(/=/g, '');
                hash = hash.replace(/\+/g, '-');
                hash = hash.replace(/\//g, '_');
                console.log('cleaned signature: ' + hash);
            }
    
            /* Defaults to 200 */
            res.body = hash;
        }
        else {
            res.throw(400, "Please pass a consent object on the query string or in the request body");
        }

    }


