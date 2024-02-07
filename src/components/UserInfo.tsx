import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const UserInfoField = ({ value }: { value: string }) => {
  return <TextField defaultValue={value} disabled fullWidth />;
};

export const UserInfo = () => {
  return (
    <React.Fragment>
      <Typography component={"h3"} variant={"h6"} mb={2}>
        You are logged in as Someone Cool.
      </Typography>
      <Grid container spacing={1} mb={2}>
        <Grid xs={12} sm={6}>
          <UserInfoField value="Someone" />
        </Grid>
        <Grid xs={12} sm={6}>
          <UserInfoField value="Cool" />
        </Grid>
        <Grid xs={12}>
          <UserInfoField value="someone.cool@cru.org" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
