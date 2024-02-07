export interface OktaResponse {
  first_name: string;
  last_name: string;
  email: string;
}

export interface ProjectsResponse {
  nonce: string;
  project_list: Project[];
}

export interface Project {
  id: number;
  name: string;
  // key is the id and value is the label
  task_list: Record<number, string>;
}

export interface TaskInfoResponse {
  task_id: number;
  fields: Field[];
}

export type Field =
  | CheckboxField
  | DateTimeField
  | FileUploadField
  | NumberField
  | SelectField
  | StringField
  | StaticTextField;

export interface BaseField {
  id: number;
  required: boolean;
  label: string;
  description?: string;
}

export interface CheckboxField extends BaseField {
  type: "checkbox";
}

export interface DateTimeField extends BaseField {
  type: "datetime";
}

export interface FileUploadField extends BaseField {
  type: "file";
  multiple: boolean;
  mime_type?: string;
}

export interface NumberField extends BaseField {
  type: "number";
}

export interface SelectField extends BaseField {
  type: "select";
  options: string[];
}

export interface StringField extends BaseField {
  type: "string";
  multiline: boolean;
}

export interface StaticTextField extends BaseField {
  type: "static";
}

export interface SubmitResponse {
  success: boolean;
  errors?: string[];
}
