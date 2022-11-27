import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { AutoStories, OndemandVideo, Videocam } from '@mui/icons-material';
import Stories from './stories';
import Reels from './Reels';
import Room from './Room';


const StoriesSection = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Box sx={{ typography: 'body1', backgroundColor: "#ffff", width: "100%" }}>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList variant='fullWidth' onChange={handleChange} >
                        <Tab iconPosition="start" icon={<AutoStories />} label="Stories" value="1" />
                        <Tab iconPosition="start" icon={<OndemandVideo />} label="Reels" value="2" />
                        <Tab iconPosition="start" icon={<Videocam />} label="Rooms" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Stories /></TabPanel>
                <TabPanel value="2"><Reels /></TabPanel>
                <TabPanel value="3"><Room /></TabPanel>
            </TabContext>
        </Box>
    );
}

export default StoriesSection;