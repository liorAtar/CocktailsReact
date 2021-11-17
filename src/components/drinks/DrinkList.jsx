import React from 'react';
import DrinkItem from './DrinkItem';
import { Grid } from '@material-ui/core';

const DrinkList = ({ drinkList, handleClickOpen }) => {

    return (
        <Grid container style={{ width: '70%', margin: 'auto' }}>
            {drinkList !== null && drinkList !== undefined && drinkList.map(drink =>
                <Grid item
                    style={{ justifyContent: 'center', display: 'flex' }}
                    key={drink.idDrink}
                    xs={12} sm={4} md={3}>
                    <DrinkItem
                        key={drink.idDrink}
                        currentDrink={drink}
                        handleClickOpen={handleClickOpen}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default DrinkList
