import React from 'react';

class SignIn extends React.Component {
    render() { 
        return (
            <h1>Sign in</h1>
        );
    }
}
 
export default SignIn;

// Main component. <LogIn /> on the left side, <SignUp /> on the right side. 
// If user logged in (<Auth />), hide SignIn icon from MainNav.js and show SignOut icon.