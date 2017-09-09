const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  activity: { type: String, required: true, unique: true },
  calories: {type: Number, default: 1},
  equipment: [String],
  date: {type : Date, default : Date.now}
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
