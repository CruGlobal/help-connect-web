import {FC} from "react";
import { Button, Dialog } from "@mui/material";

export const Login: FC = () => {
  return (
    <Dialog open={true}>
      <Button
        variant="contained"
        size="large"
        href="https://sites-stage.cru.org/help-connect/wp-login.php"
      >
        Login
      </Button>
    </Dialog>
  );
};
