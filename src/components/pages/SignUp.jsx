import React from 'react';
import { signup } from '../../firebase';
import EnterInfo from './sections/EnterInfo';

const SignUp = () => {

    const handleSignUp = async (emailRef, passwordRef) => {
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <EnterInfo action="Sign Up" handleAction={handleSignUp} />
    )
}

export default SignUp;
