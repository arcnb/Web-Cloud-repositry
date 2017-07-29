/**
 * Created by chswa on 7/26/2017.
 */

var R = require("request");
var TWITTER_CONSUMER_KEY = "zsqXkaIOiCHXj8NB6wCdzf2Vi ";
var TWITTER_CONSUMER_SECRET="wHEzqmkwW8N3ia2Nv3WZMoDzXO1ry5CMGVG7dZ5J6fU44JKrUe";

var key = process.env.TWITTER_CONSUMER_KEY;
var secret = process.env.TWITTER_CONSUMER_SECRET;
var cat = key +":"+secret;
var credentials = new Buffer(cat).toString('base64');

var url = 'https://api.twitter.com/oauth2/token';

R({ url: url,
    method:'POST',
    headers: {
        "Authorization": "Basic " + credentials,
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: "grant_type=client_credentials"

}, function(err, resp, body) {

    console.dir(body); //the bearer token...

});