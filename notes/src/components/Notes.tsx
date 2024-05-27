import React from 'react';
import { Box, Typography } from "@mui/material";
import { NoteObj } from "../models/note";   
import Note from "./Note";

interface NotesProps {
    notes: NoteObj[],
    delNote: (id: string) => void
}

const Notes: React.FC<NotesProps> = ({ notes, delNote }) => {
    return (
        <Box>
            <Typography variant="h5">Notes</Typography>
            <Box>
                {
                    notes.map((note) => (
                        <Note key={note.id} note={note} delNote={delNote} />
                    ))
                }
            </Box>
        </Box>
    );
};

export default Notes;
