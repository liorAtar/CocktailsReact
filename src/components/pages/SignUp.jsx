import React, { useRef } from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { signup, login, logout, useAuth } from '../../firebase';

const articleBtnStyle = {
    "&.MuiButton-root": {
        border: "2px black solid"
    },
    height: '40px',
    width: '130px'
};

const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
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

    return (
        <Grid container style={{ display: 'flex', height: '100vh', alignContent: 'center' }}>
            <Grid item xs={12} sm={5} md={5} style={{ display: 'grid', alignContent: 'center', marginBottom: '4rem' }} >
                <Typography variant="h4" style={{ textAlign: 'center', margin: '2rem' }}>
                    Sign Up
                </Typography>
                <div style={{ justifyContent: 'center', display: 'grid' }}>
                    <TextField ref={nameRef} label="Name" variant="standard" color="secondary" />
                    <TextField ref={emailRef} label="Email" variant="standard" color="secondary" />
                    <TextField ref={passwordRef} label="Password" variant="standard" color="secondary" />
                </div>
                <Button onClick={handleSignUp} variant="text" color="inherit" sx={articleBtnStyle} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3rem', display: 'flex' }}>Sign Up</Button>
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
                <img src="https://twolovesstudio.com/wp-content/uploads/2021/06/Tempo-Arandano_Cocktails_Blueberry-Gin_May-2021_29770-Blog-726x1088.jpg" style={{ display: 'flex', margin: 'auto' }} width="50%" />
            </Grid>
        </Grid>
    )
}

export default SignUp;
