import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Form, Formik } from "formik";
import { TaskForm } from "./TaskForm";
import { task } from "../mocks";

export const HelpConnectForm: React.FC = () => {
  const onSubmit = async (attributes: any) => {
    // Send form to WP
    console.log("attributes", attributes);
  };

  return (
    <Formik
      initialValues={{
        projectId: "",
        taskId: "",
        ...Object.fromEntries(
          task.fields.map((field) => [
            field.id,
            field.type === "datetime" ? new Date().toISOString() : "",
          ]),
        ),
      }}
      onSubmit={onSubmit}
      validateOnMount
    >
      {({ isValid }) => (
        <Container>
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "20em",
              gap: "2em",
              padding: "1em",
            }}
          >
            <TaskForm task={task} />
            <Button type="submit" disabled={!isValid}>
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
