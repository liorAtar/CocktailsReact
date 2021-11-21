import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { setSelectedDrink } from '../../actions/drinkAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DrinkItem = ({ currentDrink, openDrinkInfo, setSelectedDrink }) => {

    const callBackMethod = async () => {
        try {
            await setSelectedDrink(currentDrink.strDrink);
            openDrinkInfo();
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <Card style={{ boxShadow: '0px 0px 0px', borderRadius: '0px', backgroundColor: 'transparent' }} sx={{ maxWidth: 170, maxHeight: 260, margin: 1 }}>
            <CardActionArea onClick={callBackMethod}>
                <CardMedia
                    component="img"
                    image={currentDrink.strDrinkThumb}
                    height="170"
                    alt="cocktail"
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="body1" color="gray">
                    {currentDrink.strDrink}
                </Typography>
            </CardContent>
        </Card>
    )
}

DrinkItem.propTypes = {
    drink: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    drink: state.drink
})

export default connect(mapStateToProps, { setSelectedDrink })(DrinkItem);
