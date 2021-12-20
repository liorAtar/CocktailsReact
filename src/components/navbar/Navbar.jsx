import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Grid } from '@material-ui/core';
import Tabs from './Tabs';
import Search from './Search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../firebase';
import { setLoggedIn, updateCurrentUser } from '../../actions/userAction';

const articleBtnStyle = {
    "&.MuiButton-root": {
        color: "white"
    },
    height: '40px'
};

const Navbar = ({
    user: { currentUser, isLoggedIn },
    drink: { selectedTab }, setLoggedIn, updateCurrentUser, drinkList, filtereDrinks, cancelSearch, onChangeTab }) => {

    const handleLogOut = async () => {
        try {
            await logout();
            setLoggedIn(false);
            updateCurrentUser(null);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <AppBar position="static" elevation={0} style={{ backgroundImage: `url("https://img4.goodfon.com/wallpaper/nbig/3/af/napitki-frukty-bokaly-cocktails.jpg")`, backgroundPosition: '50% 30%', backgroundSize: 'cover', height: '60vh' }}>
            <Toolbar style={{ padding: 0 }} >
                <Grid container style={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={4} style={{ display: 'flex', justifyContent: 'start' }}>
                        <Typography
                            variant="h6"
                            style={{ color: 'white', marginRight: '1rem', marginLeft: '1rem' }}
                        >
                            Cocktails
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5}>
                        <Tabs onChangeTab={onChangeTab} />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} style={{ alignSelf: 'center', display: 'grid', justifyContent: 'center' }}>
                        {!selectedTab && <Search filtereDrinks={filtereDrinks} cancelSearch={cancelSearch} drinkList={drinkList} />}
                    </Grid>
                    {isLoggedIn &&
                        <div style={{ display: 'flex', marginLeft: 'auto' }}>
                            <Typography
                                variant="h5"
                                style={{ color: 'white', fontSize: 15, alignItems: 'center', display: 'flex' }}
                            >

                                Hello{' '}{currentUser?.displayName}
                            </Typography>
                            <Button onClick={handleLogOut}><LogoutIcon style={{ color: "#9c27b0" }} /></Button>
                        </div>
                    }
                    {!isLoggedIn &&
                        <div style={{ display: 'flex' }}>
                            <Button
                                href="/login"
                                variant="text"
                                sx={articleBtnStyle}>
                                Log In
                            </Button>
                            <Button
                                href="/signup"
                                variant="text"
                                sx={articleBtnStyle}>
                                Sign Up
                            </Button>
                        </div>
                    }
                </Grid>
            </Toolbar>
        </AppBar >
    )
}

Navbar.propTypes = {
    drink: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    drink: state.drink,
    user: state.user
})

export default connect(mapStateToProps, { setLoggedIn, updateCurrentUser })(Navbar);
