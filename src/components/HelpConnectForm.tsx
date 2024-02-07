import { Formik, Form } from "formik";
import { ReactElement } from "react";
import { UserInfo } from "./UserInfo";
import { Projects } from "./Projects";
import Container from "@mui/material/Container";

export const HelpConnectForm = () => {
  const onSubmit = async (attributes: any) => {
    // Send form to WP
    console.log("attributes", attributes);
  };

  return (
    <Formik
      initialValues={{
        projectId: "",
        taskId: "",
      }}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        setFieldValue,
        handleChange,
        isSubmitting,
        isValid,
        errors,
      }): ReactElement => (
        <Container>
          <Form>
            <UserInfo />
            <Projects />
            <button type="submit">Submit</button>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
