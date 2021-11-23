import React, { useRef } from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { signup, useAuth } from '../../../firebase';

const articleBtnStyle = {
    "&.MuiButton-root": {
        border: "2px black solid"
    },
    height: '40px',
    width: '130px'
};

const COCKTAIL_IMG = "https://twolovesstudio.com/wp-content/uploads/2021/06/Tempo-Arandano_Cocktails_Blueberry-Gin_May-2021_29770-Blog-726x1088.jpg";

const EnterInfo = ({ action, handleAction }) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth();

    const handleRequstedAction = () => {
        handleAction(emailRef, passwordRef)
    }

    return (
        <Grid container style={{ display: 'flex', height: '100vh', alignContent: 'center' }}>
            <Grid item xs={12} sm={5} md={5}
                style={{ display: 'grid', alignContent: 'center', marginBottom: '4rem' }} >
                <Typography variant="h4" style={{ textAlign: 'center', margin: '2rem' }}>
                    {action}
                </Typography>
                <div style={{ justifyContent: 'center', display: 'grid' }}>
                    <TextField inputRef={emailRef} label="Email" variant="standard" color="secondary" />
                    <TextField inputRef={passwordRef} label="Password" variant="standard" color="secondary" />
                </div>
                <Button
                    onClick={handleRequstedAction}
                    variant="text"
                    color="inherit"
                    sx={articleBtnStyle}
                    style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3rem', display: 'flex' }}>
                    {action}
                </Button>
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
                <img alt="cocktail img" src={COCKTAIL_IMG} style={{ display: 'flex', margin: 'auto' }} width="50%" />
            </Grid>
        </Grid>
    )
}

export default EnterInfo
