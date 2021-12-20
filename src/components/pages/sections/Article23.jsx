import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const articleBtnStyle = {
    "&.MuiButton-root": {
        border: "2px black solid"
    },
    height: '40px',
    width: '130px'
};

const Article23 = () => {
    return (
        <div style={{ width: '80%', marginTop: '2rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <Typography variant="h4" style={{ textAlign: 'center' }}>
                23 Classic Drinks to Order at a Bar
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center', margin: '1.5rem' }}>
                For traditionalists who like to keep things simple, these tried-and-true recipes will guarantee your drink is made perfectly.
            </Typography>
            <Button variant="text" color="inherit" href="https://www.townandcountrymag.com/leisure/drinks/g13092298/popular-bar-drinks-to-order/" sx={articleBtnStyle} style={{ margin: 'auto', display: 'flex' }}>See Article</Button>
        </div>
    )
}

export default Article23;
