const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  textdetails: {
    type: String,
    required: true,
  },
  chosecolor: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Note', NoteSchema);
