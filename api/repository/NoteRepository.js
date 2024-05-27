const Note = require('../models/Note');

class NoteRepository {
  async create(noteData) {
    const newNote = new Note(noteData);
    await newNote.save();
    return newNote;
  }

  async findAll() {
    return Note.find();
  }

  async findById(id) {
    return Note.findById(id);
  }

  async updateById(id, noteData) {
    return Note.findByIdAndUpdate(id, noteData, { new: true });
  }

  async deleteById(id) {
    return Note.findByIdAndDelete(id);
  }
}

module.exports = new NoteRepository();
