import { Project, TaskInfoResponse } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    name: "ERT",
    task_list: {
      100: "Error saving event",
      101: "Error logging in",
      102: "Error with participant",
    },
  },
  {
    id: 2,
    name: "Give Site",
    task_list: {
      200: "Branded checkout",
      201: "Donation issues",
      202: "Designation editor",
    },
  },
  {
    id: 3,
    name: "Wordpress",
    task_list: {
      300: "Login issues",
      301: "Admin issues",
      302: "FL OKr Project Creation",
    },
  },
];

export const task: TaskInfoResponse = {
  task_id: 10,
  fields: [
    {
      id: 1000,
      label: "Checkbox",
      type: "checkbox",
      required: true,
      description: "Expanded description",
    },
    {
      id: 1001,
      label: "When did this issue occur?",
      type: "datetime",
      required: true,
      description: "Expanded description",
    },
    {
      id: 1002,
      label: "Can you upload a screenshot?",
      type: "file",
      required: true,
      description: "Expanded description",
      multiple: true,
      mime_type: "image/*",
    },
    {
      id: 1003,
      label: "How many times did you try?",
      type: "number",
      required: true,
      description: "Expanded description",
    },
    {
      id: 1004,
      label: "Choose an option",
      type: "select",
      required: true,
      description: "Expanded description",
      options: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: 1005,
      label: "Here are some important instructions",
      type: "static",
      required: false,
      description: "Expanded description",
    },
    {
      id: 1006,
      label: "Did you get an error message?",
      type: "string",
      required: true,
      description: "Expanded description",
      multiline: false,
    },
    {
      id: 1007,
      label: "Please describe your error",
      type: "string",
      required: true,
      description: "Expanded description",
      multiline: true,
    },
  ],
};
