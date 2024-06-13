import React, { useState } from 'react';
import Note from './Note';
import UpdateNoteForm from './UpdateNoteForm';
import { NoteObj } from '../models/note';

interface NotesProps {
  notes: NoteObj[];
  delNote: (id: string) => void;
  updateNote: (note: NoteObj) => void;
}

const Notes: React.FC<NotesProps> = ({ notes, delNote, updateNote }) => {
  const [noteToEdit, setNoteToEdit] = useState<NoteObj | null>(null);

  const handleEditNote = (note: NoteObj) => {
    setNoteToEdit(note);
  };

  const handleCancelEdit = () => {
    setNoteToEdit(null);
  };

  const handleSaveEdit = (updatedNote: NoteObj) => {
    updateNote(updatedNote);
    setNoteToEdit(null);
  };

  return (
    <div>
      {noteToEdit && (
        <UpdateNoteForm
          note={noteToEdit}
          onCancel={handleCancelEdit}
          onSave={handleSaveEdit}
        />
      )}
      {notes.map((note) => (
        <Note
          key={note._id}
          note={note}
          delNote={delNote}
          editNote={handleEditNote}
        />
      ))}
    </div>
  );
};

export default Notes;
