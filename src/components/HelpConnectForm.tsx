import { ReactElement } from "react";
import { Formik, Form } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Projects } from "./Projects";
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
      {({
        isSubmitting,
        isValid,
      }): ReactElement => (
        <Container>
          <Form>
            <Projects />
            <TaskForm task={task} />
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button type="submit" variant="contained" color="success"  disabled={!isValid || isSubmitting}>
                Submit
              </Button>
            </Box>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
