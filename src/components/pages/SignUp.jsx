import React from 'react';
import { signup } from '../../firebase';
import EnterInfo from './EnterInfo';

const SignUp = () => {

    const handleSignUp = async (emailRef, passwordRef, firstNameRef) => {
        try {
            await signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <EnterInfo action="Sign Up" href='/login' handleAction={handleSignUp} />
    )
}

export default SignUp;
