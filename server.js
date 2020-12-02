const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');
const dotenv = require('dotenv');
const mongoConnect = require("./util/database").mongoConnect;

dotenv.config();


const feedRoutes = require('./routes/feed');


const app = express()

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(feedRoutes);


mongoConnect(()=>{
    app.listen(port, () => console.log(`Listening on port ${port} `));
})