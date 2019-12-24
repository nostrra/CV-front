import { AuthDialog } from '../Utils/Strings';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import * as config from '../config/config';

class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  authRequest = () => {
    // postData() in config
    // if response correct then auth is correct and then
    const { correctAuth } = this.props;
    this.handleClose();
    correctAuth();
  }

  authFail = () => {
    this.handleClose();
    window.location.replace(config.homeURL);
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <Dialog
          open={isOpen}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>{AuthDialog.title}</DialogTitle>
          <DialogContent>
            <TextField
              margin='dense'
              id='name'
              label={AuthDialog.labelEmail}
              type='email'
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              margin='dense'
              id='password'
              label={AuthDialog.labelPassword}
              type='password'
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.authFail}
              color='primary'
            >
              {AuthDialog.disagree}
            </Button>
            <Button
              onClick={this.authRequest}
              color='primary'
            >
              {AuthDialog.agree}
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default FormDialog;
