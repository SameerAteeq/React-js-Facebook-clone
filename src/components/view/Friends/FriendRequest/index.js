import { Box, Grid } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Home'
import Content from './content'
import Sidebar from './sidebar'

const FriendRequest = () => {
    return (
        <Box sx={{ height: "100%", mt: 8 }}>
            {/* <Grid container >
                <Grid item xs={8} sm={6} md={4} lg={3}>
                    <Sidebar />
                </Grid>
                <Grid item sx={{ display: { xs: "none", sm: "block" } }} md={8} lg={9}>
                    <Content />
                   
                </Grid>
            </Grid> */}

            <Box sx={{ width: "350px", position: "fixed" }}>
                <Sidebar />
            </Box>
            <Box sx={{ marginLeft: "350px", height: "100%" }}>
                <Content />
            </Box>
        </Box>
    )
}

export default FriendRequest