const noteRepository = require('../repository/NoteRepository'); // Certifique-se de que o caminho está correto

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await noteRepository.findAll();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes', error });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await noteRepository.findById(req.params.id);
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch note', error });
  }
};

exports.createNote = async (req, res) => {
  try {
    const noteData = {
      ...req.body,
      usuario_criador: req.user._id, // Adicione o ID do usuário logado
      nome_criador: req.user.name, // Adicione o nome do usuário criador
    };
    const note = await noteRepository.create(noteData);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create note', error });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const updatedNote = await noteRepository.updateById(req.params.id, req.body);
    if (updatedNote) {
      res.status(200).json(updatedNote);
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update note', error });
  }
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
