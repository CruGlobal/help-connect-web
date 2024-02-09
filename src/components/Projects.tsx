import { useField, Field } from "formik";
import { projects as projectData } from "../mocks";
import {
  Autocomplete,
  CircularProgress,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import { ReactElement, useMemo, useState } from "react";
import { TaskList } from "../types";

export const Projects = () => {
  const [projectField, projectMeta, projectHelpers] = useField("projectId");
  const [tasktField, taskMeta, taskHelpers] = useField("taskId");
  const [projects, setProjects] = useState(projectData || []);
  const [taskList, setTaskList] = useState<TaskList[]>([]);
  const [originalTaskList, setOriginalTaskList] = useState<TaskList[]>([]);
  const loading = false;

  const handleProjectSearch = (search: string) => {
    if (!search) {
      setProjects(projectData);
      return;
    }
    const lowerCaseSearch = search.toLowerCase();
    const filteredProjects = projectData.filter((project) =>
      project.name.toLowerCase().includes(lowerCaseSearch),
    );
    setProjects(filteredProjects);
  };

  const handleTaskListSearch = (search: string) => {
    if (!search) {
      setTaskList(originalTaskList);
      return;
    }
    const lowerCaseSearch = search.toLowerCase();
    const filteredTaskList = originalTaskList.filter((task) =>
      task.label.toLowerCase().includes(lowerCaseSearch),
    );
    setTaskList(filteredTaskList);
  };

  function validate(value: string) {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error;
  }

  const handleProjectSelected = (newValue: number) => {
    projectHelpers.setValue(newValue);
    const project = projects.find((project) => project.id === newValue);
    if (project) {
      const tasks = [];
      for (const [key, value] of Object.entries(project.task_list)) {
        tasks.push({
          id: key,
          label: value,
        });
      }
      setOriginalTaskList(tasks);
      setTaskList(tasks);
    }
  };

  const handleTaskListSelected = (newValue: string) => {
    taskHelpers.setValue(newValue);
  };

  const projectIds = useMemo(() => {
    return projects.map((project) => project.id) || [];
  }, [projects]);

  const tasksListIds = useMemo(() => {
    return taskList.map((task) => task.id);
  }, [taskList]);

  return (
    <>
      <Field name="projectId" validate={validate}>
        {() => (
          <FormControl
            fullWidth={true}
            error={!!projectMeta.error}
            variant="standard"
          >
            <Autocomplete
              autoSelect
              autoHighlight
              loading={loading}
              options={projectIds}
              getOptionLabel={(projectId): string =>
                projects.find((project) => project.id === projectId)?.name ?? ""
              }
              renderInput={(params): ReactElement => (
                <TextField
                  {...params}
                  variant="outlined"
                  label={"Project"}
                  onChange={(e) => {
                    handleProjectSearch(e.target.value || "");
                  }}
                  InputProps={{
                    ...params.InputProps,
                    "aria-labelledby": "Project",
                    endAdornment: (
                      <>
                        {loading && (
                          <CircularProgress color="primary" size={20} />
                        )}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
              value={projectField.value}
              onChange={(_, projectId) => handleProjectSelected(projectId)}
              sx={{ mb: 2 }}
            />
            {projectMeta.error && (
              <FormHelperText>{projectMeta.error}</FormHelperText>
            )}
          </FormControl>
        )}
      </Field>

      {originalTaskList && (
        <Field name="taskId" validate={validate}>
          {() => (
            <FormControl
              fullWidth={true}
              error={!!taskMeta.error}
              variant="standard"
            >
              <Autocomplete
                autoSelect
                autoHighlight
                loading={loading}
                options={tasksListIds}
                getOptionLabel={(taskId): string =>
                  taskList.find((task) => task.id === taskId)?.label ?? ""
                }
                renderInput={(params): ReactElement => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label={"Task List"}
                    onChange={(e) => {
                      handleTaskListSearch(e.target.value || "");
                    }}
                    InputProps={{
                      ...params.InputProps,
                      "aria-labelledby": "Task List",
                      endAdornment: (
                        <>
                          {loading && (
                            <CircularProgress color="primary" size={20} />
                          )}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                )}
                value={tasktField.value}
                onChange={(_, taskId) => handleTaskListSelected(taskId)}
                sx={{ mb: 2 }}
              />
              {taskMeta.error && (
                <FormHelperText>{taskMeta.error}</FormHelperText>
              )}
            </FormControl>
          )}
        </Field>
      )}
    </>
  );
};
