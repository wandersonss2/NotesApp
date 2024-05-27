import React from 'react';
import { Box, Card, CardContent, Typography, Button, styled } from '@mui/material';
import { NoteObj } from '../models/note';

interface NoteProps {
    note: NoteObj,
    delNote: (id: string) => void
}

const NoteCard = styled(Card)`
    width: 400px;
    margin: 20px;
`

const Wrapper = styled(Box)`
    & > button {
        border: 1px solid #000;
        background: #fff;
        margin-top: 10px;
    }
`

const Note: React.FC<NoteProps> = ({ note, delNote }) => {
    return (
        <NoteCard style={{ backgroundColor: note.chosecolor }}>
            <CardContent>
                <Wrapper>
                    <Typography>{note.title}</Typography>
                    <Typography>{note.textdetails}</Typography>
                    <Typography>{note.date}</Typography>
                    <Button variant="outlined" onClick={() => {
                        console.log(`Note ID to delete: ${note.id}`); // Log do ID da nota
                        delNote(note.id);
                    }}>Apagar</Button>
                </Wrapper>
            </CardContent>
        </NoteCard>
    );
}

export default Note;
