import { Box, Grid } from '@mui/material'
import React from 'react'
import Navbar from '../../common/Navbar'
import HomeContent from './HomeContent'
import PostUpload from './postUpload'
import RightSidebar from './RightSidebar'
import HomeSidebar from './Sidebar'
import StoriesSection from './StoriesSection'

const Home = () => {
    return (
        <Box sx={{ backgroundColor: "#f7f7f7", height: "100%", mt: 8 }}>
            <Grid container padding="5px">
                <Grid item sx={{ display: { xs: "none", lg: "none", xl: "block" } }} xl={3} >
                    <HomeSidebar />
                </Grid>
                <Grid item xs={12} md={7} lg={8} xl={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <HomeContent />
                </Grid>
                <Grid item sx={{ display: { xs: "none", md: "block" } }} md={3} lg={4} xl={3}>
                    <RightSidebar />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home