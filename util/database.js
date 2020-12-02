const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (callback)=>{
    MongoClient.connect("mongodb+srv://mukeshraj:mukesh2297@cluster0.dofzc.mongodb.net/Feed?retryWrites=true&w=majority",{ useUnifiedTopology: true })
    .then((client)=>{
        console.log("Connected");
        db = client.db();
        callback(client);
    }).catch((err)=>{
        console.log(err);
        throw err;
    });
}

const getDb=()=>{
    if(db){
        return db;
    }
    throw "No database connection found!"
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

