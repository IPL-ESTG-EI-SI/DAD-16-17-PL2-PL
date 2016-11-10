'use strict';
(function(){

	var express = require('express');

	var server = express();


	server.use('/',express.static('angular-1'));


	server.listen(8080,function(){
		console.log("Running on port 8080");
	})

})();