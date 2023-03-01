import Form from "./Form";
import Tasklist from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { hello } from "../../utils/hello";

hello();

function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasklist />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;