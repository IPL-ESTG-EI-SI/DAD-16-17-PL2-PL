'use strict';

var mongodb = require('mongodb');
var database = require('./mongo4.database');
var players = module.exports = {};

function getTopTen(request, response, next){
	database.db.collection("players").find({}).sort({ totalVictories: -1 }).limit(10).toArray(function(err, players) {
		if(err) {
        console.log(err);
        next();
    } else {
	    response.json(players);
	    next();
    }
  });
}

function getPlayers(request, response, next){
	// TODO: query players collection 
	// and return a JSON response will all players
	database.db.collection("players").find({},{username:1,avatar:1,totalVictories:1}).toArray(function(err, players) {
		if(err) {
        console.log(err);
        next();
    } else {
	    response.json(players);
	    next();
    }
  });
}

function getPlayer(request, response, next){
	// TODO: obtain one player (by ObjectID) from players collection 
	// and return a JSON response with that player
	// Endpoint URL example: api/v1/players/34299dfa515f3da86af58060
	var id = new mongodb.ObjectID(request.params.id);
	database.db.collection("players").findOne({_id:id},function(err, player) {
		if(err) {
        console.log(err);
        next();
    } else {
	    response.json(player);
	    next();
    }
  });
}

function updatePlayer(request, response, next){
	// TODO: updates one player of the players collection
	// from the object sent on the request body. 
	// Return a JSON response with that player  	
	var id = new mongodb.ObjectID(request.params.id);
	var player = request.body;
	player._id = id;

	database.db.collection("players").save(player,function(err, result) {
		if(err) {
        console.log(err);
        next();
    } else {
	    database.db.collection("players").findOne({_id:id},function(err, player) {
	  		if(err) {
		        console.log(err);
		        next();
		    } else {
			    response.json(player);
			    next();
		    }
		  });
    }
  });
}

function createPlayer(request, response, next){
	// TODO: create a new player and save it on the players collection
	// New player data is obtained from the object sent on the request body. 
	// Return a JSON response with that player  

	var player = request.body;

	database.db.collection("players").insertOne(player,function(err, result) {
		if(err) {
        console.log(err);
        next();
    } else {
    	console.log (result);
    	var id = result.insertedId;
	    database.db.collection("players").findOne({_id:id},function(err, player) {
	  		if(err) {
		        console.log(err);
		        next();
		    } else {
			    response.json(player);
			    next();
		    }
		  });
    }
  });
}

function deletePlayer(request, response, next){
	// TODO: removes one player from the players collection
	// Return a JSON response with a message "Player -XXX- Deleted"

	var id = new mongodb.ObjectID(request.params.id);
	database.db.collection("players").deleteOne({_id:id},function(err, result) {
		if(err) {
        console.log(err);
        next();
    } else {
	    response.json({msg:"Player -"+id+"-  Deleted"});
	    next();
    }
  });
}

// Routes for the players
players.init = function(server, security, apiBaseUri){
	server.get(apiBaseUri+'topten',getTopTen);
	server.get(apiBaseUri+'players',
	 	    security.passport.authenticate('bearer', { session: false }), getPlayers);
	server.get(apiBaseUri+'players/:id',
	 	    security.passport.authenticate('bearer', { session: false }), getPlayer);
	server.put(apiBaseUri+'players/:id',
	 	    security.passport.authenticate('bearer', { session: false }), updatePlayer);
	server.post(apiBaseUri+'players',
	 	    security.passport.authenticate('bearer', { session: false }), createPlayer);
	server.del(apiBaseUri+'players/:id',
	 	    security.passport.authenticate('bearer', { session: false }), deletePlayer);
	console.log("Players routes registered");
}



  