import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const articleBtnStyle = {
    "&.MuiButton-root": {
        border: "2px black solid"
    },
    height: '40px',
    width: '130px'
};

const Entrance = ({ user: { isLoggedIn } }) => {
    return (
        <div style={{ width: '80%', marginTop: '1rem', marginLeft: 'auto', marginRight: 'auto' }}>
            {!isLoggedIn && <Fragment>
                <Typography component="div" variant="h2" style={{ textAlign: 'center' }}>
                    Want to know the recipes?
                </Typography>
                <Typography variant="h5" color="text.secondary" component="div" style={{ textAlign: 'center' }}>
                    Sign up and Log In
                </Typography>
                <Button
                    href="/login"
                    variant="text"
                    color="inherit"
                    sx={articleBtnStyle}
                    style={{ marginTop: '2rem', marginLeft: 'auto', marginRight: 'auto', display: 'flex' }}>
                    Log In
                </Button>
                <Button
                    href="/signup"
                    variant="text"
                    color="inherit"
                    sx={articleBtnStyle}
                    style={{ marginTop: '1rem', marginLeft: 'auto', marginRight: 'auto', display: 'flex' }}>
                    Sign Up
                </Button>
            </Fragment>
            }
        </div >
    )
}

Entrance.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(Entrance);