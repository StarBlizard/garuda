'use strict';

// Update with your config settings.
require('nconf').argv().env().file({ file: 'config/config.json' });

const nconf = require('nconf');

module.exports = {

  development: {
    client    : nconf.get('database:client'),
    connection: nconf.get('database:connection')
  }
};
