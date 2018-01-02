const {MongoClient,ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
       return console.log("Unable to conncet Mongodb server");
    }

    console.log("Connected to Mongodb Server");

    // db.collection('Todos').find({
    //     _id:new ObjectID('5a4b6c2c9a4c9ebc4453b865')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     console.log("Unable to fetch todos ",err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Number of Todos : ${count}`);
    // },(err) => {
    //     console.log("Unable to fetch todos ",err);
    // })

    // db.collection('Users').find({name:'Andrew'})
    // .toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     console.log("Unable to fetch Users", err);
    // })

    // db.collection('Users').find().count().then((count) => {
    //     console.log(`Number of Users : ${count}`);
    // },(err) => {
    //     console.log("Unable to fetch Users ",err);
    // })
    
    // db.close();

});