import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import { useAuth } from '../../firebase';

const Registration = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth();

    const handleSignUp = async () => {
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch (err) {
            alert(err.message);
        }
    }

    const handleLogIn = async () => {
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch (err) {
            alert(err.message);
        }
    }

    const handleLogOut = async () => {
        try {
            await logout();
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div>
            <p>Currently logged in as: {currentUser?.email}</p>
            <input ref={emailRef} placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <Button onClick={handleSignUp} variant="text" color="inherit" >Sign Up</Button>
            <Button onClick={handleLogIn} variant="text" color="inherit" >Log In</Button>
            <Button onClick={handleLogOut} variant="text" color="inherit" >Log Out</Button>
        </div>
    )
};

export default Registration;

