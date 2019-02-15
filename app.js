var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

const api = require('./routes/index');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.options('*', cors());

app.use('/api',api);

var port = process.env.PORT || 2305;


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
