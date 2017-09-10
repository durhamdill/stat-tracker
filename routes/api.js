const express= require('express');
const router = express.Router();
// const Activity = require('./models/activities');
// const activitiesFile = require('../models/activities');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Activity = require('../models/activities');

// mongoose.connect('mongodb://localhost:27017/stattracker', {useMongoClient: true});

// endpoints in this file are nested under '/api'

router.get('/activities', function(req, res){
  Activity.find().then(function (activity) {
    res.json(activity);
  })
})

router.post('/activities', function(req, res){
  var new_activity = new Activity(req.body);
  new_activity.save(function (activity) {
    res.json({activity: activity});
  })
})

router.get('/activities/:id', function(req, res){
  Activity.find({_id: req.params.id}).then(function (activity) {
    res.json(activity);
  })
})

router.put('/activities/:id', function(req, res){
  Activity.findOneAndUpdate({_id: req.params.id}, req.body).then(function (activity) {
    res.json(activity);
  })
})

router.delete('/activities/:id', function(req, res){
  Activity.remove({_id: req.params.id}).then(function (activity) {
    res.json({message: 'Task successfully deleted'});
  })
})

module.exports = router;
