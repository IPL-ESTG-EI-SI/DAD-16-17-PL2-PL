'use strict';

var mongodb = require('mongodb');
var database = require('./mongo2.database');
var players = module.exports = {};

function getPlayers(request, response, next){
	// TODO: query players collection 
	// and return a JSON response will all players
	database.db.collection('players')
		.find({})
		.toArray(function(err,players){
			if(err) throw err;
			response.json(players);
			next();
		});
}

function getPlayer(request, response, next){
	// TODO: obtain one player (by ObjectID) from players collection 
	// and return a JSON response with that player
	// Endpoint URL example: api/v1/players/34299dfa515f3da86af58060
	var id = new mongodb.ObjectId(request.params.id);

	database.db.collection('players')
		.findOne({_id:id},function(err,players){
			if(err) throw err;
			if(!players){
				response.json({msg:'No Player exists'})
				next();
			}
			response.json(players);
			next();
		});
}

function updatePlayer(request, response, next){
	// TODO: updates one player of the players collection
	// from the object sent on the request body. 
	// Return a JSON response with that player  	

	var id = new mongodb.ObjectId(request.params.id);
	var data = request.body;
	data._id = id;

	database.db.collection('players').save(data,function(err,result){
		
		database.db.collection('players')
			.findOne({_id:id},function(err,players){
				if(err) throw err;
				response.json(players);
				next();
			});

	});

}	

function createPlayer(request, response, next){
	// TODO: create a new player and save it on the players collection
	// New player data is obtained from the object sent on the request body. 
	// Return a JSON response with that player  

	var data = request.body;

	database.db.collection('players').insertOne(data,function(err, results){
		if(err) throw err;

		response.json(results.ops[0]);
		next();
	});

}

function deletePlayer(request, response, next){
	// TODO: removes one player from the players collection
	// Return a JSON response with a message "Player -XXX- Deleted"
	var id = new mongodb.ObjectId(request.params.id);

	database.db.collection('players').removeOne({_id:id},function(err, result){
		if(err) throw err;

		response.json({msg:'Player removed'});
		next();
	});
}

function topTen(request, response, next){
	// TODO: query players collection 
	// and return a JSON response will all players
	database.db.collection('players')
		.find({})
		.sort({totalVictories:-1})
		.limit(10)
		.toArray(function(err,players){
			if(err) throw err;
			response.json(players);
			next();
		});
}

// Routes for the players
players.init = function(server,apiBaseUri){
	server.get(apiBaseUri+'players',getPlayers);
	server.get(apiBaseUri+'players/:id',getPlayer);
	server.put(apiBaseUri+'players/:id',updatePlayer);
	server.post(apiBaseUri+'players',createPlayer);
	server.del(apiBaseUri+'players/:id',deletePlayer);
	server.get(apiBaseUri+'topten',topTen);
	console.log("Players routes registered");
}



  