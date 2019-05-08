import React from 'react';
import firebase from 'firebase'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import  { Redirect } from 'react-router-dom'

class DeleteUser extends React.Component {
    state = {
        open: false,
        redirect: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    signOut = () => {
        firebase.auth().signOut()
		    .then(this.setRedirect)
    }

    deleteAccount = () => {
        var user = firebase.auth().currentUser;
        user.delete()
            .then(this.signOut)
            .then(this.handleClose)
            .catch(error => alert(error))
    }

    render() { 
        return (
            <>
                <div className="delete__button">
                    <span onClick={this.handleClickOpen}>
                        Delete account
                    </span>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This action is irreversible.. Do you really want to delete your account?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                            NO
                        </Button>
                        { this.renderRedirect() }
                        <Button onClick={this.deleteAccount} color="secondary">
                            YES
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default DeleteUser;