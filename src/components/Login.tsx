import { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export const Login: FC = () => {
  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogContentText>
          You must be logged in to use the Help Scout Helper.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          size="large"
          href="https://sites-stage.cru.org/help-connect/wp-login.php"
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};
