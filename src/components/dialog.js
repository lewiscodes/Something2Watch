import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default (props) => {

  return (
    <Dialog
      open={props.open}
      onClose={props.closeHandler}
      scroll={'paper'}
    >
    <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {props.plot}
      </DialogContentText>
    </DialogContent>
    </Dialog>
  );
};