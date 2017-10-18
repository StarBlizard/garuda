'use strict';

const nconf         = require('nconf');

let app       		  = require('./services/server').app;
let passport   		  = require('./services/passport').passport;
let indexController = require("./controllers/indexController");

// Views
app.get('/', indexController.index);
