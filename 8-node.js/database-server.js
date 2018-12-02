var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/myDb";

MongoClient.connect(url, function(error, db){
  if(error){
    throw error;
  }
  console.log("Database Created");
  var dbObject = db.db('myDb');
  dbObject.createCollection('customers', function(error, response){
    if(error){
      throw error;
    }
    console.log('Collection Created');
    db.close();
  });
});
