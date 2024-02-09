import { Formik, Form } from "formik";
import { ReactElement } from "react";
import { Projects } from "./Projects";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";

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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={3}
            square={false}
            sx={{ maxWidth: "600px", width: "100%", padding: 2 }}
          >
            <Form>
              <Projects />
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Button type="submit" variant="contained" color="success">
                  Submit
                </Button>
              </Box>
            </Form>
          </Paper>
        </Box>
      )}
    </Formik>
  );
};
