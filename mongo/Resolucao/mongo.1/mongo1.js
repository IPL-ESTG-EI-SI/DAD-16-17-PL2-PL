'use strict';
(function(){
	var mongodb = require('mongodb');

	var MongoClient = mongodb.MongoClient;

	var url = 'mongodb://localhost:27017/dad_mongo';

	MongoClient.connect(url, function (err, db) {
	    if (err) {
	        console.log('Unable to connect to the mongoDB server. Error:', err);
	        return;
	    }
        console.log('Connection established to', url);

        var collection = db.collection('players');

        var players = [
                {
                    name:'Albert Einstein',
                    username: 'albert',
                    passwordHash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
                    avatar:'https://api.adorable.io/avatars/285/albert.png',
                    totalVictories: 12
                },
                {
                    name:'Carl Sagan',
                    username: 'carl',
                    passwordHash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
                    avatar:'https://api.adorable.io/avatars/285/carl.png',
                    totalVictories: 3
                },
                {
                    name:'Richard Feynman',
                    username: 'richard',
                    passwordHash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
                    avatar:'https://api.adorable.io/avatars/285/richard.png',
                    totalVictories: 1
                }
            ];

        collection.insert(players, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log('Inserted %d documents into the "players" collection', result.insertedCount);
                result.ops.forEach(function (player){
                    console.log(player._id+' - '+player.name);
                })
            }
        });
        db.close();
    });
})();