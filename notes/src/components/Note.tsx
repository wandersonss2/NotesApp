import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const NoteContainer = styled(Card)`
  margin: 20px;
  padding: 20px;
  background-color: ${(props) => props.color || '#fff'};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

interface NoteProps {
  note: {
    _id: string;
    title: string;
    textdetails: string;
    chosecolor: string;
    date: string;
  };
  delNote: (id: string) => void;
  editNote: (note: NoteProps['note']) => void;
}

const Note: React.FC<NoteProps> = ({ note, delNote, editNote }) => {
  return (
    <NoteContainer color={note.chosecolor}>
      <CardContent>
        <Typography variant="h5">{note.title}</Typography>
        <Typography variant="body2" style={{ margin: '10px 0' }}>
          {note.textdetails}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {note.date}
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => delNote(note._id)} style={{ marginTop: '10px' }}>
          Excluir
        </Button>
        <Button variant="contained" color="primary" onClick={() => editNote(note)} style={{ marginTop: '10px', marginLeft: '10px' }}>
          Atualizar
        </Button>
      </CardContent>
    </NoteContainer>
  );
};

export default Note;
