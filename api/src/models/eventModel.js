// src/models/eventModel.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    validate: {
      validator: function(v) {
        return !isNaN(Date.parse(v));
      },
      message: props => `${props.value} is not a valid date!`
    }
  },
});

module.exports = mongoose.model('Event', eventSchema);
