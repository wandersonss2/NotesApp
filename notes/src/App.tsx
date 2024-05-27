import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import { NoteObj } from "./models/note";
import { getNotes, deleteNote } from './api';

const App: React.FC = () => {
    const [notes, setNotes] = useState<NoteObj[]>([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const notes = await getNotes();
        setNotes(notes);
    };

    const addNote = (note: NoteObj) => {
        setNotes([...notes, note]);
    };

    const delNote = async (id: string) => {
        try {
            console.log(`Deleting note with id: ${id}`); // Log do ID que está sendo passado
            await deleteNote(id);
            setNotes(notes.filter(note => note.id !== id));
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Error deleting note: ${error.message}`); // Log do erro
            } else {
                console.error('Error deleting note:', error); // Log do erro genérico
            }
        }
    };

    return (
        <div>
            <Header />
            <CreateNote addNote={addNote} />
            <Notes notes={notes} delNote={delNote} />
        </div>
    );
};

export default App;
