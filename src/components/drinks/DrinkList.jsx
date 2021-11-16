import React from 'react';
import DrinkItem from './DrinkItem';
import { Grid } from '@material-ui/core';

const DrinkList = ({ drinkList }) => {
    return (
        <Grid container style={{ justifyContent: 'center' }}>
            {drinkList.map(drink =>
                <Grid item
                    key={drink.idDrink}
                    xs={12} sm={4} md={3}>
                    <DrinkItem
                        key={drink.idDrink}
                        name={drink.strDrink}
                        img={drink.strDrinkThumb}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default DrinkList
