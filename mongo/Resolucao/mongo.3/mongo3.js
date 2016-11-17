'use strict';
(function(){
	var restify = require('restify');
	var path = require('path');
	var database = require('./mongo3.database');

	var url = 'mongodb://localhost:27017/dad_mongo';

	var server = restify.createServer();

	restify.CORS.ALLOW_HEADERS.push("content-type");

	server.use( restify.bodyParser() );
	server.use( restify.queryParser() );
	server.use( restify.CORS() );
  	server.use( restify.fullResponse() );

	// URL base Rest Api endpoints = /api/v1
  	var players = require('./mongo3.players')
  	players.init(server, '/api/v1/');
  
  	var games = require('./mongo3.games')
  	games.init(server, '/api/v1/');  

  	database.connect(url, function () {
		server.listen(8080, function () {
			console.log('MongoDB App listening on port 8080!')
		});
	});
}());