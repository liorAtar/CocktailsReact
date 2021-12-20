import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Entrance from '../pages/sections/Entrance';

const DrinkDialog = ({ user: { isLoggedIn }, drink, recipe, open, onClose }) => {

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {drink.strDrink}
            </DialogTitle>
            <DialogContent >
                <Grid container style={{ justifyContent: 'center', display: 'flex' }}>
                    <Grid item>
                        <img style={{ height: 150, margin: 10 }} src={drink.strDrinkThumb} alt={drink.strDrink} />
                    </Grid>
                    {!isLoggedIn &&
                        <Entrance />
                    }
                    {isLoggedIn &&
                        <Grid item style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}>
                            {recipe.map((ingredient, index) =>
                                <Typography variant="body2" key={index}>{ingredient}<br /></Typography>
                            )}
                        </Grid>
                    }
                </Grid>
                {isLoggedIn && <Typography style={{ margin: 10 }} gutterBottom variant="body2" color="black">
                    {drink.strInstructions}
                </Typography>
                }
            </DialogContent>
        </Dialog >
    )
}

DrinkDialog.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(DrinkDialog);
