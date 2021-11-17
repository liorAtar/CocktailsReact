import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const DrinkDialog = ({ drink, recipe, instructions, open, onClose }) => {

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {drink.strDrink}
            </DialogTitle>
            <DialogContent >
                <Grid container style={{ justifyContent: 'center', display: 'flex' }}>
                    <Grid item >
                        <img style={{ height: 150, margin: 10 }} src={drink.strDrinkThumb} alt={drink.strDrink} />
                    </Grid>
                    <Grid item style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}>
                        {recipe.map((ingredient, index) => <Typography variant="body2" key={index}>{ingredient}<br /></Typography>)}
                    </Grid>
                </Grid>
                <Typography style={{ margin: 10 }} gutterBottom variant="body2" color="black">
                    {instructions}
                </Typography>
            </DialogContent>
        </Dialog >
    )
}

export default DrinkDialog;
