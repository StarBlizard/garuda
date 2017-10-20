'use strict';

function isEmptyJSON(obj){
	for(var i in obj){return false;}
  return true;
}

module.exports = {
  loggedIn(req, res, next){
    if(isEmptyJSON(req.session.passport)){
      return res.redirect('/');
    }else{
      return next();
    }
  }
};
