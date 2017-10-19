'use strict';

const path = require('path');

module.exports = { 
  granted(req, res){
    return res.status(200).send({
      data : req.user
    })
  }
};
