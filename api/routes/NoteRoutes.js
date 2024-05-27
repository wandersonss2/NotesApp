const express = require('express');
const router = express.Router();
const noteController = require('../controllers/NoteController');

router.get('/notes', noteController.getAllNotes);
router.get('/notes/:id', noteController.getNoteById);
router.post('/create', noteController.createNote);
router.put('/notes/:id', noteController.updateNote);
router.delete('/delete/:id', noteController.deleteNote);

module.exports = router;
