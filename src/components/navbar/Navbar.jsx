import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import Tabs from './Tabs';
import Search from './Search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ drink: { selectedTab }, drinkList, filtereDrinks, cancelSearch, onChangeTab }) => {
    return (
        <AppBar position="static" elevation={0} style={{ backgroundImage: `url("https://img4.goodfon.com/wallpaper/nbig/3/af/napitki-frukty-bokaly-cocktails.jpg")`, backgroundPosition: '50% 40%', backgroundSize: 'cover', height: '60vh' }}>
            <Toolbar style={{ padding: 0 }} >
                <Grid container style={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={3} style={{ display: 'grid', justifyContent: 'center' }}
                    >
                        <Typography
                            variant="h5"
                            style={{ color: 'white' }}
                        >
                            Cocktails
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Tabs onChangeTab={onChangeTab} />
                    </Grid>
                    <Grid item xs={12} sm={3} style={{ alignSelf: 'center', display: 'grid', justifyContent: 'center' }}>
                        {!selectedTab && <Search filtereDrinks={filtereDrinks} cancelSearch={cancelSearch} drinkList={drinkList} />}
                    </Grid>
                    {/* <Grid item xs={12} sm={9} style={{ display: 'flex' }}>
                        <Grid container style={{ justifyContent: 'center' }}>
                            <Grid item sm={8}>
                                <Tabs onChangeTab={onChangeTab} />
                            </Grid>
                            <Grid item sm={3} style={{ alignSelf: 'center', marginLeft: '10px' }}>
                                {!selectedTab && <Search filtereDrinks={filtereDrinks} cancelSearch={cancelSearch} drinkList={drinkList} />}
                            </Grid>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Toolbar>
        </AppBar >
    )
}

Navbar.propTypes = {
    drink: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    drink: state.drink
})

export default connect(mapStateToProps)(Navbar);
