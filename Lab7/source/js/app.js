/**
 * Created by chswa on 7/26/2017.
 */



var OAuth = require('oauth');
var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    "zsqXkaIOiCHXj8NB6wCdzf2Vi",
    'wHEzqmkwW8N3ia2Nv3WZMoDzXO1ry5CMGVG7dZ5J6fU44JKrUe',
    '1.0A',
    null,
    'HMAC-SHA1'
);

oauth.get('https://api.twitter.com/1.1/trends/place.json?id=1',
'611748255-2SydB8ibdF8jASl7yPTlm66GqGuD9hYUUXceVA9V','FOWMax3hnTXZS3pPC1GnWs76UHxJCM8s0rmOwEnInxInE',function (e,data,res) {
    if(e){
        console.error(e);
    }
    else {
        console.log(require('util').inspect(data));
        done();
    }
    
});
