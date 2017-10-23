'use strict';

const path = require('path');

module.exports = { 
  granted(req, res){
    return res.status(200).redirect('/');
  },

  getUser(req, res){
    return res.status(200).send(req.session.passport.user);
  }
};
