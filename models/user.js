'use strict';

const db = require('../services/database').db

const user = db.Model.extend({ 
  tableName   : 'users'
})

module.exports.user = user;
