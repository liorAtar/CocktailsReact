import React from 'react';
import { signup } from '../../firebase';
import { login } from '../../firebase';
import { connect } from 'react-redux';
import EnterInfo from './EnterInfo';
import PropTypes from 'prop-types';
import { updateCurrentUser, setLoggedIn } from '../../actions/userAction';

const SignUp = ({updateCurrentUser, setLoggedIn}) => {

    const handleSignUp = async (emailRef, passwordRef, firstNameRef) => {
        try {
            await signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value);
            const userCredential = await login(emailRef.current.value, passwordRef.current.value);
            await updateCurrentUser(userCredential.user);
            setLoggedIn(true);
            setTimeout(function () {
                window.location.href = '/';
            }, 1000);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <EnterInfo action="Sign Up" href='/login' handleAction={handleSignUp} />
    )
}

SignUp.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { updateCurrentUser, setLoggedIn })(SignUp);
