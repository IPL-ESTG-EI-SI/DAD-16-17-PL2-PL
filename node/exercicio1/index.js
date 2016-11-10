'use strict';
(function(){

	var http = require('http');
	var concat = require('concat-stream');


	var query = process.argv[2];
	var url = 'http://www.omdbapi.com/?s='+query;

	http.get(url,function(response){
		response.setEncoding('utf8');
		//response.on('data',dataHandler);
		response.pipe(concat(dataHandler));

	});

	function dataHandler(data){
		var json = JSON.parse(data);

		json.Search.forEach(function(movie){
			console.log(movie.Title);
		});
	}


})();