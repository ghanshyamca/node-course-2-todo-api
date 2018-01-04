const {MongoClient,ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
       return console.log("Unable to conncet Mongodb server");
    }

    console.log("Connected to Mongodb Server");
    //deleteMany
        // db.collection('Todos').deleteMany({text:'Eat Dinner'}).then((result) => {
        //     console.log(result);
        // });
    //deleteOne
        // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });
    // findOneAndDelete
        // db.collection('Todos').findOneAndDelete({completed:true}).then((result) => {
        //     console.log(result);
        // })

        // db.collection('Users').deleteMany({name:'Andrew'}).then((result) => {
        //     console.log(result);
        // })

         db.collection('Users').findOneAndDelete({name:'Andrew'}).then((result) => {
            console.log(result);
        })
    // db.close();

});