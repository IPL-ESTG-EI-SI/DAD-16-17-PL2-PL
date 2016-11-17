'use strict';

var mongodb = require('mongodb');
var database = require('./mongo2.database');
var games = module.exports = {};

function getGames(request, response, next){
	// TODO: query games collection 
	// and return a JSON response will all games
	database.db.collection('games')
		.find({})
		.toArray(function(err,players){
			if(err) throw err;
			response.json(players);
			next();
		});
}

function getGame(request, response, next){
	// TODO: obtain one game (by ObjectID) from games collection 
	// and return a JSON response with that game
	// Endpoint URL example: api/v1/games/58299dfa515f3da86af58060

}

function updateGame(request, response, next){
	// TODO: updates one game of the games collection
	// from the object sent on the request body. 
	// Return a JSON response with that game  

}

function createGame(request, response, next){
	// TODO: create a new game and save it on the games collection
	// New game data is obtained from the object sent on the request body. 
	// Return a JSON response with that game  

}

function deleteGame(request, response, next){
	// TODO: removes one game from the games collection
	// Return a JSON response with a message "Game -XXX- Deleted"

}

// Routes for the games
games.init = function(server,apiBaseUri){
	server.get(apiBaseUri+'games',getGames);
	server.get(apiBaseUri+'games/:id',getGame);
	server.put(apiBaseUri+'games/:id',updateGame);
	server.post(apiBaseUri+'games',createGame);
	server.del(apiBaseUri+'games/:id',deleteGame);
	console.log("Games routes registered");
}



  