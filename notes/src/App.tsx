import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import Login from './components/Login';
import Register from './components/Register';
import { NoteObj } from "./models/note";
import { getNotes, deleteNote, updateNote } from './api';

const App: React.FC = () => {
    const [notes, setNotes] = useState<NoteObj[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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

    const delNote = async (_id: string) => {
        try {
            console.log(`Deleting note with id: ${_id}`);
            await deleteNote(_id);
            setNotes(notes.filter(note => note._id !== _id));
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Error deleting note: ${error.message}`);
            } else {
                console.error('Error deleting note:', error);
            }
        }
    };

    const updateNoteInState = async (updatedNote: NoteObj) => {
        try {
            await updateNote(updatedNote._id, updatedNote);
            setNotes(notes.map(note => (note._id === updatedNote._id ? updatedNote : note)));
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Error updating note: ${error.message}`);
            } else {
                console.error('Error updating note:', error);
            }
        }
    };

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
                    <Route path="/register" element={<Register onRegister={() => setIsAuthenticated(true)} />} />
                    <Route path="/" element={isAuthenticated ? (
                        <>
                            <CreateNote addNote={addNote} />
                            <Notes notes={notes} delNote={delNote} updateNote={updateNoteInState} />
                        </>
                    ) : (
                        <Navigate to="/login" />
                    )} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

export {};
