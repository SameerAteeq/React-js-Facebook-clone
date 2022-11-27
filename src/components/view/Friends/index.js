import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FriendsContent from './FriendsContent'
import FriendSidebar from './FriendSidebar'

const Friends = () => {
    return (

        <Box sx={{ height: "100%", mt: 8 }}>
            {/* <Grid container >
                <Grid item xs={8} sm={6} md={4} lg={3}>
                    <FriendSidebar />
                </Grid>
                <Grid item sx={{ display: { xs: "none", md: "block" } }} md={8} lg={9}>
                    <FriendsContent />
                </Grid>
            </Grid> */}
            <Box sx={{ width: "350px", position: "fixed" }}>
                <FriendSidebar />
            </Box>
            <Box sx={{ marginLeft: "350px" }}>
                <FriendsContent />
            </Box>
        </Box>

    )
}

export default Friends