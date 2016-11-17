'use strict';

var mongodb = require('mongodb');

var sha1 = require('sha1');

var database = require('./mongo4.database');
var security = require('./mongo4.security');
var players = module.exports = {};

function login(request, response, next){

	var player = request.user;
	var id = player._id;
	console.log(player);

	var date = new Date();
	var timestamp = date.getTime();
	player.token = sha1(player.username+timestamp)
	
	database.db.collection("players").save(player,function(err, player) {
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

function logout(request, response, next){
	var player = request.user;
	var id = player._id;
	player.token = '';
	database.db.collection("players").save(player,function(err, player) {
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

players.init = function(server, security, apiBaseUri){
	server.post(
		apiBaseUri+'login',
		security.passport.authenticate('local'),
		login);
	server.post(
		apiBaseUri+'logout',
		security.passport.authenticate('bearer', { session: false }),
		logout);
	console.log("Auth routes registered");
}



  