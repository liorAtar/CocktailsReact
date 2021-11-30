import React, { useState } from 'react';
import TabsContainer from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid } from '@mui/material';

const Tabs = ({ onChangeTab }) => {

    const [selectedTab, setSelectedTab] = useState('Home');

    const handleChange = (event, newSelectedTab) => {
        setSelectedTab(newSelectedTab);
        onChangeTab(newSelectedTab);
    };

    return (
        <TabsContainer style={{ color: 'white', justifyContent: 'center', display: 'grid' }} textColor="inherit" indicatorColor="secondary"
            onChange={handleChange} value={selectedTab} aria-label="basic tabs example">
            <Grid container xs={12} style={{ justifyContent: 'center' }}>
                <Grid item >
                    <Tab value="Home" label="Home" style={{ minWidth: 0, paddingRight: 8, paddingLeft: 8 }} />
                </Grid>
                <Grid item >
                    <Tab value="Gin" label="Gin" style={{ minWidth: 0, paddingRight: 8, paddingLeft: 8 }} />
                </Grid>
                <Grid item>
                    <Tab value="Rum" label="Rum" style={{ minWidth: 0, paddingRight: 8, paddingLeft: 8 }} />
                </Grid>
                <Grid item>
                    <Tab value="Tequila" label="Tequila" style={{ minWidth: 0, paddingRight: 8, paddingLeft: 8 }} />
                </Grid>
                <Grid item>
                    <Tab value="Vodka" label="Vodka" style={{ minWidth: 0, paddingRight: 8, paddingLeft: 8 }} />
                </Grid>
            </ Grid>
        </TabsContainer>
    )
}

export default Tabs;
