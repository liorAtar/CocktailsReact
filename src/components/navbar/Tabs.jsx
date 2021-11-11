import React, { useState } from 'react';
import TabsContainer from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Tabs = () => {

    const [value, setValue] = useState('All');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <TabsContainer onChange={handleChange} value={value} aria-label="basic tabs example">
                <Tab value="All" label="All" style={{ minWidth: 0, padding: 8 }} />
                <Tab value="Gin" label="Gin" style={{ minWidth: 0, padding: 8 }} />
                <Tab value="Rum" label="Rum" style={{ minWidth: 0, padding: 8 }} />
                <Tab value="Tequila" label="Tequila" style={{ minWidth: 0, padding: 8 }} />
                <Tab value="Vodka" label="Vodka" style={{ minWidth: 0, padding: 8 }} />
            </TabsContainer>
        </div>
    )
}

export default Tabs;
