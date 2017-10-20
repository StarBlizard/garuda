'use strict';

const path = require('path');

module.exports = { 
  granted(req, res){
    console.log(req.user);
    return res.status(200).redirect('/home');
  }
};
