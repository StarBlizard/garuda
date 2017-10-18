'use strict';

// Start configuration service
require('nconf').argv().env().file({ file: 'config/config.json' });

//Start server
require('./services/database').start();
require('./services/passport').start();
require('./services/server').start();


//Load routes
require('./routes');
