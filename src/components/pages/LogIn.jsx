import React from 'react';
import { login } from '../../firebase';
import EnterInfo from './sections/EnterInfo';

const LogIn = () => {

    const handleLogIn = async (emailRef, passwordRef) => {
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <EnterInfo action="Log In" handleAction={handleLogIn} />
    )
}

export default LogIn;
