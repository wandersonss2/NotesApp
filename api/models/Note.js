const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
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
    default: '#F5F5F5',
  },
  date: {
    type: String,
    required: true,
  },
  usuario_criador: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  nome_criador: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
