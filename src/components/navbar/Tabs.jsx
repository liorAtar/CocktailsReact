import React, { useState } from 'react';
import TabsContainer from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Tabs = ({ onChangeTab }) => {

    const [selectedTab, setSelectedTab] = useState('Gin');

    const handleChange = (event, newSelectedTab) => {
        setSelectedTab(newSelectedTab);
        onChangeTab(newSelectedTab);
    };

    return (
        <div>
            <TabsContainer onChange={handleChange} value={selectedTab} aria-label="basic tabs example">
                <Tab value="Gin" label="Gin" style={{ minWidth: 0, padding: 8 }} />
                <Tab value="Rum" label="Rum" style={{ minWidth: 0, padding: 8 }} />
                <Tab value="Tequila" label="Tequila" style={{ minWidth: 0, padding: 8 }} />
                <Tab value="Vodka" label="Vodka" style={{ minWidth: 0, padding: 8 }} />
            </TabsContainer>
        </div>
    )
}

export default Tabs;
