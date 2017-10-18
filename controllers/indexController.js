'use strict';

const path = require('path');

module.exports = { 
	
	index(req, res){
		console.log("session: ", req.session.passport);
		res.sendFile(path.join(__dirname, '../public', 'index.html'));
	}

};
