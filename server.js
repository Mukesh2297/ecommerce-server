const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const feedRoutes = require('./routes/feed');


const app = express()

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(feedRoutes);


app.listen(port, () => console.log(`Listening on port ${port} `));