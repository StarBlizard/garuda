'use strict';

const nconf         = require('nconf');

let app       		  = require('./services/server').app;
let passport   		  = require('./services/passport').passport;
let indexController = require("./controllers/indexController");
let usersController = require("./controllers/usersController");

// Views
app.get('/', indexController.index);

// Twitter Auth
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect : '/', successRedirect: '/' }), usersController.granted);
