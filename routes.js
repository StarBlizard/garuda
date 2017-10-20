'use strict';

const nconf           = require('nconf');

// Controllers
let app       		    = require('./services/server').app;
let passport   		    = require('./services/passport').passport;
let indexController   = require("./controllers/indexController");
let usersController   = require("./controllers/usersController");
let twitterController = require("./controllers/twitterController");

// Middlewares
let authMiddleware    = require('./middlewares/auth');

// Views
app.get(['/', '/home'], authMiddleware.loggedIn, indexController.index);

// Twitter Auth
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect : '/' }), usersController.granted);

// Twitter feed
app.get('/tweets', authMiddleware.loggedIn, twitterController.feed);
