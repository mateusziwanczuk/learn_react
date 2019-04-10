import React from 'react';
import firebase from 'firebase'
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SignOutButton from '../Auth/SignOut'

const styles = {
    grow: {
        flexGrow: 1,
    },
    linkContainer: {
        '& a': {
            textDecoration: 'none',
        }
    }
};

class Navigation extends React.Component {
    state = {
        user: null
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
    }
    render(){
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar className={classes.linkContainer}>
                        <NavLink to='/counter'>
                            <Button>Counter</Button>
                        </NavLink>
                        <NavLink to='/counter-live'>
                            <Button>Live Counter</Button>
                        </NavLink>
                        <NavLink to='/chat-live'>
                            <Button>Live Chat</Button>
                        </NavLink>
                        <div className="float-right">
                            {
                                this.state.user ? (
                                <React.Fragment>
                                    <NavLink to='/profile'>
                                        <Button>Profile</Button>
                                    </NavLink>
                                    <SignOutButton />
                                </React.Fragment>
                                ) : (
                                <React.Fragment>
                                    <NavLink to='/sign-in'>
                                        <Button>Sign In</Button>
                                    </NavLink>
                                    <NavLink to='/sign-up'>
                                        <Button>Sign Up</Button>
                                    </NavLink>
                                </React.Fragment>
                                )
                            }        
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);