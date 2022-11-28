import { Favorite, Home, School, Work } from '@mui/icons-material';
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import UserImages from './images';
import UserProfilePicture from './profileImg';
import UserFriends from './userFriends';

const UserProfilePost = ({ user }) => {
    return (
        <Box sx={{ backgroundColor: "#ddd", padding: "15px" }} >
            <Grid container spacing={2}>
                <Grid item xs={12} xl={5}>
                    <Box sx={{ backgroundColor: '#ffff', borderRadius: "10px", padding: '10px', mb: '10px' }}>
                        <Typography variant='h6'>Intro</Typography>
                        <Stack direction="row" alignItems="center" gap="10px" mb="8px" >
                            <Work sx={{ color: "gray" }} />
                            <Typography variant="body2" sx={{ color: "#333" }}>{user.work}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap="10px" mb="8px">
                            <School sx={{ color: "gray" }} />
                            <Typography variant="body2">{user.studied}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap="10px" mb="8px">
                            <Home sx={{ color: "gray" }} />
                            <Typography variant="body2">in mall</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap="10px" mb="8px">
                            <Favorite sx={{ color: "gray" }} />
                            <Typography variant="body2">in mall</Typography>
                        </Stack>

                    </Box>
                    <Box sx={{ mb: '10px' }}>
                        <UserImages {...{ user }} />
                    </Box>
                    <Box>
                        <UserFriends />
                    </Box>
                </Grid>
                <Grid item xs={12} xl={6}>
                    <Box>
                        <UserProfilePicture {...{ user }} />
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default UserProfilePost