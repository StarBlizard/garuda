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


      // Login user if exists, else save it
      let profileData = {
        username   : profile.username,
        twitter_id : profile.id,
        photo      : profile._json.profile_image_url,
        headColor  : profile._json.profile_background_color,
        headImage  : (profile._json.profile_background_image) ? profile._json.profile_background_image : "",
        sideColor  : (profile._json.profile_side_bar_fill_color) ? profile._json.profile_side_bar_fill_color : "",
        textColor  : profile._json.profile_text_color
      };

      let newUser = User.forge(profileData);

      newUser
        .fetch()
        .then( user => {
          if(user){
            return done(null, user.attributes);
          }else{
            newUser
              .save()
              .then( user => {
                return done(null, profileData);
              });
          };
        });
        
	});

};
