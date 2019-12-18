import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';

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

    render() {
      const { isOpen } = this.state;
      return (
        <>
          <Dialog
            open={isOpen}
            onClose={this.handleClose}
            aria-labelledby='form-dialog-title'
          >
            <DialogTitle id='form-dialog-title'>Sign in</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin='dense'
                id='name'
                label='Email Address'
                type='email'
                fullWidth
              />
            </DialogContent>
            <DialogContent>
              <TextField
                autoFocus
                margin='dense'
                id='password'
                label='Password'
                type='password'
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.handleClose}
                color='primary'
              >
                Cancel
              </Button>
              <Button
                onClick={this.authRequest}
                color='primary'
              >
                Sign in
              </Button>
            </DialogActions>
          </Dialog>
        </>
      );
    }
}

export default FormDialog;
