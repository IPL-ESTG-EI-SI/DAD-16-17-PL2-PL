'use strict';
(function(){

	var restify = require('restify');
	var path = require('path');


	var server = restify.createServer();

	server.use(restify.bodyParser());
	server.use(restify.queryParser());
	server.use(restify.fullResponse());
	server.use(restify.CORS());

	// / - ANGULAR

	server.get(/^\/(?!api).*$/,restify.serveStatic({
		"directory":path.join(__dirname,'angular-2'),
		"default":"index.html",
		"maxAge":-1
	}))

	var leaderboard = [
        {name:'Albert Einstein',maxScore:9500,avatar:'https://api.adorable.io/avatars/285/albert.png'},
        {name:'Carl Sagan',maxScore:8000,avatar:'https://api.adorable.io/avatars/285/carl.png'},
        {name:'Richard Feynman',maxScore:8000,avatar:'https://api.adorable.io/avatars/285/richard.png'}
    ];

	// /api/leaderboard - API
	server.get('/api/leaderboard',function(req, res, next){
		res.json(leaderboard);
		next();
	})


	server.post('/api/leaderboard',function(req, res, next){
		var data = req.body;
		leaderboard.push(data);
		res.json({msg: "Player created"});
		next();
	})

	server.put('/api/leaderboard/:id',function(req, res, next){
		var id = req.params.id;
		var data = req.body;
		leaderboard[id] = data;
		res.json({msg: "Player updated"});
		next();
	})

	server.listen(8080,function(){
		console.log("Running on port 8080");
	})

})();