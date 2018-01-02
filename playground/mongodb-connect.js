const {MongoClient,ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
       return console.log("Unable to conncet Mongodb server");
    }

    console.log("Connected to Mongodb Server");

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err, result) => {
    //     if(err){
    //         return console.log("Unable to insert record in table",err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2))
    // })

    // db.collection('Users').insertOne({
    //     name:'Andrew',
    //     age:25,
    //     location:'philadapeia'
    // },(err, result) => {
    //     if(err){
    //         return console.log("Unable to insert record in table",err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();

});