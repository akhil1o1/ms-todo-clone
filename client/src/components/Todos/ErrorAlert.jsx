import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";


function ErrorAlert({ showAlert, setShowAlert}) {

  const handleClose = () => {
    setShowAlert(false);
  };
  

  return (
      <Dialog
        open={showAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Error!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please add a task in input field before saving.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default ErrorAlert;
