import React, { useState } from "react";
import { InputBase, Box, Button, styled, Typography } from "@mui/material";
import { v4 as uuid } from 'uuid';
import { TITLELIMIT, DESCRIPTIONLIMIT } from "../constants/constant";
import { createNote } from '../api';
import { NoteObj } from "../models/note";

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
`
const Error = styled(Typography)`
    background: pink;
    color: #000;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    width: 300px;
    text-align: center;
`

const StyledButton = styled(Button)`
    background-color: #333;
    color: #fff;
    &:hover {
        background-color: #555;
    }
`

const defaultObj: NoteObj = {
    _id: uuid(), // Gerar ID único
    title: "",
    textdetails: "",
    chosecolor: "#F5F5F5",
    date: (new Date().toLocaleString()).toString(),
}

interface CreateNoteP {
    addNote: (note: NoteObj) => void
}

const CreateNote: React.FC<CreateNoteP> = ({ addNote }) => {
    const [note, setNote] = useState<NoteObj>(defaultObj);
    const [error, setError] = useState<string>("");

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (error) {
            setError("");
        }
        setNote({ ...note, [e.target.name]: e.target.value }) 
    }

    const onCreateNote = async () => {
        if (!note.title || !note.textdetails) {
            setError("Titulo e texto são obrigatórios");
            return;
        }

        try {
            const createdNote = await createNote(note);
            addNote(createdNote);
            setNote({ ...defaultObj, _id: uuid() }); // Gerar novo ID para a próxima nota
        } catch (error) {
            setError("Erro ao criar a nota");
        }
    }

    return (
        <Container>
            <InputBase
                placeholder="Titulo"
                onChange={(e) => onValueChange(e)}
                name="title"
                value={note.title}
                inputProps={{
                    maxLength: TITLELIMIT
                }}
            />

            <Box component="span">{note.title.length}/{TITLELIMIT}</Box>

            <InputBase
                placeholder="Escreva sua nota aqui"
                onChange={(e) => onValueChange(e)}
                name="textdetails"
                value={note.textdetails}
                inputProps={{
                    maxLength: DESCRIPTIONLIMIT
                }}
                multiline
                rows={4}
            />

            <Box component="span">{note.textdetails.length}/{DESCRIPTIONLIMIT}</Box>
            
            <InputBase
                type="color"
                defaultValue={note.chosecolor}
                onChange={(e) => onValueChange(e)}
                name="chosecolor"
            />

            <StyledButton 
                variant="outlined"
                onClick={() => onCreateNote()}
            >
                Criar nota
            </StyledButton>
            {error && <Error>{error}</Error>}
        </Container>
    );
}

export default CreateNote;
