'use strict';
(function(){

    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

	var mongodb = require('mongodb');

	var MongoClient = mongodb.MongoClient;

	var url = 'mongodb://localhost:27017/dad_mongo';

	MongoClient.connect(url, function (err, db) {
	    if (err) {
	        console.log('Unable to connect to the mongoDB server. Error:', err);
	        return;
	    }
        console.log('Connection established to', url);

        // Clean the collection    

        var collection = db.collection('players');

        collection.remove({});

        // Insert 3 known players    
        var players = [
                {
                    name:'Albert Einstein',
                    username: 'albert',
                    passwordHash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
                    avatar:'https://api.adorable.io/avatars/285/albert.png',
                    totalVictories: 110
                },
                {
                    name:'Carl Sagan',
                    username: 'carl',
                    passwordHash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
                    avatar:'https://api.adorable.io/avatars/285/carl.png',
                    totalVictories: 107
                },
                {
                    name:'Richard Feynman',
                    username: 'richard',
                    passwordHash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
                    avatar:'https://api.adorable.io/avatars/285/richard.png',
                    totalVictories: 108
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

        // Insert 200 unknown players    
        for(var i=0; i<200; i++) {
            var p = {
                    name:'Player Number ' + i,
                    username: 'p'+i,
                    passwordHash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
                    avatar:'',
                    totalVictories: getRandomInt(0,109)
                }
            collection.insert(p, function (err, result) {
                if (err) {
                    console.log(err);
                } 
            });
        }            
        db.close();
    });
})();