import React from 'react';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';

const SignOut = () => {
    const signOut = () => {
        firebase.auth().signOut();
    };
    return <Button color="secondary" onClick={signOut}>Sign out</Button>
};

export default SignOut; 