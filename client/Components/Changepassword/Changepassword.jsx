'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentText } from '@mui/material';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
       Change Password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Forrget Your Password !!</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Change Your Password Now . 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="oldPassword"
            label="Old Password"
            type="text"
            fullWidth
            variant="standard"
          />
             <TextField
             margin="dense"
            id="newPassword"
            label="New Password"
            type="text"
            fullWidth
            variant="standard"
          />
            <TextField
            
            margin="dense"
            id="confirmNewPassword"
            label="Confirm New Password"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Chaneg</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}