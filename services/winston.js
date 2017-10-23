'use strict';

const nconf   = require('nconf');
const winston = require('winston');

module.exports = {

	start(){
    this.logger = new (winston.Logger)({
      transports  : [
        new (winston.transports.Console)({ timestamp : true })
      ],
      exitOnError : false
    })
  }

};
