const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Activity = require('./models/activities');
// const Activity = activitiesFile.Activity;
mongoose.connect('mongodb://localhost:27017/stattracker', {useMongoClient: true});

// add ability to parse URL parameter
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

module.exports = app;

app.listen(3000, function(){
  console.log('Started express application!')
});
