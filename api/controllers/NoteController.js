const noteRepository = require('../repository/NoteRepository');

exports.getAllNotes = async (req, res) => {
  const notes = await noteRepository.findAll();
  res.json(notes);
};

exports.getNoteById = async (req, res) => {
  const note = await noteRepository.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: 'Não encontrado' });
  }
};

exports.createNote = async (req, res) => {
  const note = await noteRepository.create(req.body);
  res.status(201).json(note);
};

exports.updateNote = async (req, res) => {
  const updatedNote = await noteRepository.updateById(req.params.id, req.body);
  res.json(updatedNote);
};

exports.deleteNote = async (req, res) => {
  try {
      const id = req.params.id;
      console.log(`Deleting note with id: ${id}`); // Log do ID recebido
      const deletedNote = await noteRepository.deleteById(id);
      if (!deletedNote) {
          console.log(`Note with id ${id} not found`); // Log se a nota não for encontrada
          return res.status(404).send({ message: 'Note not found' });
      }
      res.status(200).send({ message: 'Note deleted successfully' });
  } catch (error) {
      console.error(`Error deleting note: ${error.message}`); // Log do erro
      res.status(500).send({ message: 'Error deleting note', error });
  }
};