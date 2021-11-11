import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const DrinkItem = ({ name, img }) => {
    return (
        <Card sx={{ maxWidth: 300, margin: 1 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={img}
                    height="200"
                    alt="cocktail"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" color="gray" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default DrinkItem
