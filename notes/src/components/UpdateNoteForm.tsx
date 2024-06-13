import React, { useState } from 'react';
import { InputBase, Box, Button, styled, Typography } from '@mui/material';
import { NoteObj } from '../models/note';

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 20px;
  }
  & > div > input[type="text"], & > div > textarea {
    border: 1px solid #111111;
    border-radius: 5px;
    padding: 10px;
    width: 300px;
    padding-right: 25px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    &::placeholder {
      color: #555;
    }
  }
  & > div > input[type="color"] {
    width: 60px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }
  & > span {
    font-size: 10px;
    position: relative;
    right: 30px;
  }
`;

const Error = styled(Typography)`
  background: pink;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  width: 300px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  background-color: #333;
  color: #fff;
  &:hover {
    background-color: #555;
  }
`;

interface UpdateNoteFormProps {
  note: NoteObj;
  onCancel: () => void;
  onSave: (note: NoteObj) => void;
}

const UpdateNoteForm: React.FC<UpdateNoteFormProps> = ({ note, onCancel, onSave }) => {
  const [updatedNote, setUpdatedNote] = useState<NoteObj>(note);
  const [error, setError] = useState<string>("");

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) {
      setError("");
    }
    setUpdatedNote({ ...updatedNote, [e.target.name]: e.target.value });
  };

  const onSaveNote = () => {
    if (!updatedNote.title || !updatedNote.textdetails) {
      setError("Titulo e texto são obrigatórios");
      return;
    }

    onSave(updatedNote);
  };

  return (
    <Container>
      <InputBase
        placeholder="Titulo"
        onChange={(e) => onValueChange(e)}
        name="title"
        value={updatedNote.title}
        inputProps={{
          maxLength: 100,
        }}
      />

      <Box component="span">{updatedNote.title.length}/100</Box>

      <InputBase
        placeholder="Escreva sua nota aqui"
        onChange={(e) => onValueChange(e)}
        name="textdetails"
        value={updatedNote.textdetails}
        inputProps={{
          maxLength: 500,
        }}
        multiline
        rows={4}
      />

      <Box component="span">{updatedNote.textdetails.length}/500</Box>

      <InputBase
        type="color"
        value={updatedNote.chosecolor}
        onChange={(e) => onValueChange(e)}
        name="chosecolor"
      />

      <StyledButton variant="outlined" onClick={() => onSaveNote()}>
        Salvar alterações
      </StyledButton>
      <Button variant="outlined" onClick={onCancel}>
        Cancelar
      </Button>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default UpdateNoteForm;
