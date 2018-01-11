const {MongoClient,ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
       return console.log("Unable to conncet Mongodb server");
    }
    console.log("Connected to Mongodb Server");

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID("5a4b325a417ddb67e4a25f8b")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // });


    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID("5a4b4a5681f90b7165e8c9c8")
    },{
        $set:{
            name:'Geetaa'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result)
    });
   
    // db.close();

});