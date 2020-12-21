const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');
const dotenv = require('dotenv');
const mongoConnect = require("./util/database").mongoConnect;
const mongoose = require("mongoose");

dotenv.config();


const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');


const app = express()

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(feedRoutes);

app.use("/auth",authRoutes);

mongoose.connect("mongodb+srv://mukeshraj:mukesh2297@cluster0.dofzc.mongodb.net/Auth?retryWrites=true&w=majority")
.then(()=>{
    app.listen(port, () => console.log(`Listening on port ${port} `));
}).catch(err=>{
    console.log(err);
})


// mongoConnect(()=>{
//     app.listen(port, () => console.log(`Listening on port ${port} `));
// })