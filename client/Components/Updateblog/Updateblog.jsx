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
       Update Blog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update your Blog Now </DialogTitle>
        <DialogContent>
        <DialogContentText>
            Update Blog
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="title"
            type="text"
            fullWidth
            variant="standard"
          />
             <TextField
             margin="dense"
            id="content"
            label="content"
            type="text"
            fullWidth
            variant="standard"
          />
            
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}