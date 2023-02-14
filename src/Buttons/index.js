import { PrimaryButton, OtherButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <PrimaryButton>
        {tasks.length > 0 && (
            <>
                <OtherButtons
                    onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </OtherButtons>
                <OtherButtons
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </OtherButtons>
            </>
        )}
    </PrimaryButton>
);

export default Buttons;