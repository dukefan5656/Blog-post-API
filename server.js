'use strict';

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const app = express();

const blogRouter = require('./blogRouter');



app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
});


app.use('/blog', blogRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
