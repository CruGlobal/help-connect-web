import { Formik, Form } from 'formik';
import { ReactElement } from 'react';
import { Projects } from './Projects';
import Paper from '@mui/material/Paper';

export const HelpConnectForm = () => {

  const onSubmit = async (attributes: any) => {
    // Send form to WP
    console.log('attributes', attributes)
  };

  return (
    <Formik
      initialValues={{
        projectId: '',
        taskId: '',
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
        <Paper elevation={3} square={false}>
          <Form>
            <Projects />
            <button type="submit">Submit</button>
          </Form>
        </Paper>
      )}
    </Formik>
  )
}