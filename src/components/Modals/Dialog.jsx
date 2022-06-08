import React from "react";
import MuiDialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const Dialog = (props) => {
  return (
    <MuiDialog open={props.open} onClose={props.closeHandler}>
      <DialogContent>{props.children}</DialogContent>
    </MuiDialog>
  );
};

export default Dialog;
