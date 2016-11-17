	var passport = require('passport');
	var LocalStrategy = require('passport-local').Strategy;
	var BearerStrategy = require('passport-http-bearer').Strategy;
	var sha1 = require('sha1');

	var database = require('./mongo4.database');

	var security = module.exports = {};

	security.passport = passport;

	security.init = function(server){

	server.use(passport.initialize());

	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	passport.deserializeUser(function(user, done) {
		done(null, user);
	});
	
	passport.use(new LocalStrategy(
	  function(username, password, done) {
	    database.db.collection('players').findOne({ username: username }, function (err, player) {
	      if (err) { return done(err); }
	      if (!player) {
	        return done(null, false, { message: 'Incorrect username.' });
	      }
	      if (!validPassword(player,password)) {
	        return done(null, false, { message: 'Incorrect password.' });
	      }
	      return done(null, player);
	    });
	  }
	));	


	passport.use(new BearerStrategy(
	  function(token, done) {
	    database.db.collection('players').findOne({ token: token }, function (err, player) {
	      if (err) { return done(err); }
	      if (!player) { return done(null, false); }
	      return done(null, player);
	    });
	  }
	));
}


function validPassword(player,passwordToTest){
	var hash = sha1(passwordToTest);
	return player.passwordHash == hash;
}

