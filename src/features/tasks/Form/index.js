import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";
import { FormContent, FormInput, FormButton } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid()
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <FormContent onSubmit={onFormSubmit}>
            <FormInput
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?" autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <FormButton>Dodaj zadanie</FormButton>
        </FormContent>
    );
};

export default Form;