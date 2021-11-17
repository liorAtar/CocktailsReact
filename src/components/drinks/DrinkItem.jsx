import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';

const DrinkItem = ({ drink, handleClickOpen }) => {

    const callBackMethod = async () => {
        try {
            let res = await axios.get(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.strDrink}`
            );

            const selectedDrink = res.data.drinks[0];
            const ingredients = [];
            const measurements = [];
            const recipe = [];

            for (const [key, value] of Object.entries(selectedDrink)) {
                if (key.includes("strIngredient") && value !== null) {
                    ingredients.push(value);
                }
            }

            for (const [key, value] of Object.entries(selectedDrink)) {
                if (key.includes("strMeasure") && value !== null) {
                    measurements.push(value);
                }
            }

            for (let index = 0; index < ingredients.length; index++) {
                if (measurements[index] !== undefined) {
                    recipe.push(measurements[index] + ' ' + ingredients[index]);
                } else {
                    recipe.push(ingredients[index]);
                }
            }

            handleClickOpen(drink, recipe, selectedDrink.strInstructions);

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <Card sx={{ maxWidth: 170, maxHeight: 260, margin: 1 }}>
            <CardActionArea onClick={callBackMethod}>
                <CardMedia
                    component="img"
                    image={drink.strDrinkThumb}
                    height="170"
                    alt="cocktail"
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="body1" color="gray">
                    {drink.strDrink}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default DrinkItem
