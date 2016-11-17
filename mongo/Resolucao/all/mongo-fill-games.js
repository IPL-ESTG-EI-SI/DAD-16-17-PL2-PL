'use strict';
(function(){

    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

	var mongodb = require('mongodb');

	var MongoClient = mongodb.MongoClient;

	var url = 'mongodb://localhost:27017/dad_mongo';

    var fillGames = function (db, players){
            var collectionGames = db.collection('games');
            collectionGames.remove({});
            // Insert 600 games players    
            for(var i=0; i<600; i++) {
                var x = getRandomInt(0,9);
                var status =  "ended";
                if (x>7)
                    status = "canceled";
                else
                    if (x>=5)
                        status = "playing";    
                var p1=getRandomInt(0,198);
                var p2=getRandomInt(0,198);
                if (p1==p2)
                    p2++;
                var p1ID = players[p1]._id;
                var p2ID = players[p2]._id;

                var g = {
                            "players":[
                                {
                                    "player": p1ID,
                                    "score": getRandomInt(0,200)
                                },
                                {
                                    "player": p2ID,
                                    "score": getRandomInt(0,200)
                                }
                            ],
                            "state": status
                        }
                collectionGames.insert(g, function (err, result) {
                    console.log("inserting game %s" , i);
                    if (err) {
                        console.log(err);
                    } 
                });
            }
            db.close();
    };

	MongoClient.connect(url, function (err, db) {
	    if (err) {
	        console.log('Unable to connect to the mongoDB server. Error:', err);
	        return;
	    }
        console.log('Connection established to', url);

        var collection = db.collection('players');

        collection.find({}).toArray(function(err, data) {
		    if(err) {
                console.log(err);
            } else {
                fillGames(db, data);
            }
        });
       // db.close();
    });
})();



/*

    var fillGames = function (players){
        MongoClient.connect(url, function (err, dbGames) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
                return;
            }


            var collectionGames = dbGames.collection('games');
            collectionGames.remove({});
            // Insert 200 unknown players    
            for(var i=0; i<200; i++) {
                var x = getRandomInt(0,9);
                var status =  "ended";
                if (x>7)
                    status = "canceled";
                else
                    if (x>=5)
                        status = "playing";    
                var p1=getRandomInt(0,198);
                var p2=getRandomInt(0,198);
                if (p1==p2)
                    p2++;
                var p1ID = players[p1]._id;
                var p2ID = players[p2]._id;

                var g = {
                            "players":[
                                {
                                    "player": p1ID,
                                    "score": getRandomInt(0,200)
                                },
                                {
                                    "player": p1ID,
                                    "score": getRandomInt(0,200)
                                }
                            ],
                            "state": status
                        }
                collectionGames.insert(g, function (err, result) {
                    if (err) {
                        console.log(err);
                    } 
                });
            }
        });
        dbGames.close();
    };
*/