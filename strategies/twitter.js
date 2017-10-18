'use strict';

const passport        = require('../services/passport.js');
const TwitterStrategy = require('passport-twitter').Strategy;
const User            = require('../models/user.js').user;
const nconf           = require('nconf');


module.exports = function(){

    return new TwitterStrategy({
      consumerKey    : nconf.get('twitter').consumerKey,  // sign up app on twitter
      consumerSecret : nconf.get('twitter').consumerSecret,
      callbackURL    : nconf.get('domain').concat("/auth/twitter/callback")
    },
    function(token, tokenSecret, profile, done){

      // Login user if exists, else save it  
        
      return done(null, profil);
	});

};
