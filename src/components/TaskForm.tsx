import { Field } from "./Field";
import { TaskInfoResponse } from "../types";

interface TaskFormProps {
  task: TaskInfoResponse;
}

export const TaskForm: React.FC<TaskFormProps> = ({ task }) =>
  task.fields.map((field) => <Field key={field.id} field={field} />);
