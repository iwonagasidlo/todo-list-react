import { useState, useRef } from "react";
import { FormContent, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        addNewTask(trimmedNewTaskContent);
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