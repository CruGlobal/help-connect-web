import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useField } from "formik";
import { Field as FieldType } from "../types";

interface FieldProps {
  field: FieldType;
}

// Return false if the value is invalid
const validate = (value: unknown, field: FieldType): boolean => {
  if (!field.required) {
    return true;
  }
  if (field.type === "file") {
    return value instanceof FileList && value.length > 0;
  }
  if (field.type === "number" && value === 0) {
    return true;
  }
  if (field.type === "static") {
    return true;
  }
  return !value;
};

export const Field: React.FC<FieldProps> = ({ field }) => {
  const [fieldProps, meta, helpers] = useField({
    name: field.id.toString(),
    validate: (value) =>
      validate(value, field) ? undefined : "This field is required",
  });
  const helperText =
    meta.error && meta.touched ? meta.error : field.description;
  const hasError = !!(meta.touched && meta.error);

  if (field.type === "checkbox") {
    return (
      <FormGroup>
        <FormControlLabel
          control={<Checkbox required={field.required} {...fieldProps} />}
          label={field.label}
        />
        <FormHelperText>{field.description}</FormHelperText>
      </FormGroup>
    );
  } else if (field.type === "datetime") {
    return (
      <TextField
        label={field.label}
        required={field.required}
        helperText={helperText}
        error={hasError}
        {...fieldProps}
      />
    );
  } else if (field.type === "file") {
    return (
      <TextField
        type="file"
        label={field.label}
        required={field.required}
        helperText={helperText}
        error={hasError}
        multiple={field.multiple}
        inputProps={{
          accept: field.mime_type,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        {...fieldProps}
        // Formik doesn't support image uploads, so manually manage value and onChange
        onChange={(event) => {
          helpers.setValue(event.currentTarget.files);
        }}
        value={undefined}
      />
    );
  } else if (field.type === "number") {
    return (
      <TextField
        type="number"
        label={field.label}
        required={field.required}
        helperText={helperText}
        error={hasError}
        {...fieldProps}
      />
    );
  } else if (field.type === "select") {
    return (
      <FormControl required={field.required}>
        <InputLabel>{field.label}</InputLabel>
        <Select label={field.label} {...fieldProps}>
          {field.options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{field.description}</FormHelperText>
      </FormControl>
    );
  } else if (field.type === "static") {
    return (
      <Typography component="div">
        {field.label}
        {field.description && (
          <Typography variant="body2">{field.description}</Typography>
        )}
      </Typography>
    );
  } else if (field.type === "string") {
    return (
      <TextField
        label={field.label}
        multiline={field.multiline}
        required={field.required}
        helperText={helperText}
        error={hasError}
        {...fieldProps}
      />
    );
  }
};
