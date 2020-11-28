const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const feedRoutes = require('./routes/feed');


const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(feedRoutes);


app.listen(8080, () => console.log(`Listening on port 8080 `));