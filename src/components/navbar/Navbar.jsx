import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import Tabs from './Tabs';
import Search from './Search';

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar style={{ background: 'white', padding: 0 }} >
                    <Grid container style={{ alignItems: 'center' }}>
                        <Grid item xs={12} sm={3} style={{ display: 'grid', justifyContent: 'center' }}>
                            <Typography
                                variant="h5"
                                style={{ color: 'black' }}
                            >
                                Cocktails
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} style={{ display: 'flex' }}>
                            <Grid container style={{ justifyContent: 'center' }}>
                                <Grid item sm={8}>
                                    <Tabs />
                                </Grid>
                                <Grid item sm={4} style={{ alignSelf: 'center' }}>
                                    <Search />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar >
        </div >
    )
}

export default Navbar;
