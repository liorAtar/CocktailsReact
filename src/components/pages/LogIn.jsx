import React from 'react';
import EnterInfo from './EnterInfo';
import { login } from '../../firebase';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateCurrentUser, setLoggedIn } from '../../actions/userAction';

const LogIn = ({ user: { loadingUser }, updateCurrentUser, setLoggedIn }) => {

    const handleLogIn = async (emailRef, passwordRef) => {
        try {
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
        <EnterInfo action="Log In" href='/' handleAction={handleLogIn} />
    )
}

LogIn.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { updateCurrentUser, setLoggedIn })(LogIn);
