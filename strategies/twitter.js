'use strict';

const passport        = require('../services/passport.js');
const TwitterStrategy = require('passport-twitter').Strategy;
const User            = require('../models/user.js').user;
const nconf           = require('nconf');


module.exports = function(){

    return new TwitterStrategy({
      consumerKey    : nconf.get('twitter').consumerKey,  // sign up app on twitter
      consumerSecret : nconf.get('twitter').consumerSecret,
      callbackURL    : nconf.get('domain').concat("auth/twitter/callback"),
      profileFields : ['id', 'emails', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified', 'picture.type(large)']
    },
    function(token, tokenSecret, profile, done){

      console.log(profile);

      // Login user if exists, else save it  
        
      return done(null, profile);
	});

};
