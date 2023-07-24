import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { Box } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: 0,
  },
  "& .MuiDialogActions-root": {
    padding: 0,
  },
}));

export default function CustomPopup({ btn, content }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Box onClick={handleClickOpen}>{btn}</Box> */}
      <button
        onClick={handleClickOpen}
        className="submit_button"
        style={{ background: btn ? "#00a1ef" : "" }}
      >
        Get an instant quote
      </button>
      <BootstrapDialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            padding: "0",
            margin: "20px",
          },
        }}
      >
        <DialogContent>{content}</DialogContent>
      </BootstrapDialog>
    </div>
  );
}
