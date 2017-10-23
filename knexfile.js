'use strict';

// Update with your config settings.
require('nconf').argv().env().file({ file: 'config/config.json' });

const nconf = require('nconf');

module.exports = {

  development: {
    client: 'pg',
    connection: nconf.get('database').connection
  }
};
