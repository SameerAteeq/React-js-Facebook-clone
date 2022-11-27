import { VideoCall } from '@mui/icons-material'
import { Box, Stack, styled, Typography } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'

const Room = () => {
    const RoomBox = styled(Box)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "180px",
        border: "1px solid gray",
        padding: "10px",
        cursor: "pointer",
        borderRadius: "10px",
        "&:hover": {
            backgroundColor: "#f7f7f7"
        }
    })
    const StyledTypograpy = styled(Typography)({
        border: "1px solid gray",
        color: "#008ad3",
        padding: "5px",
        textAlign: "center",
        width: "100%",
        marginTop: "10px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#dddd"
        }
    })
    return (
        <RoomBox>
            <Stack direction="column" justifyContent="center" alignItems="center" gap="14px">
                <VideoCall sx={{ fontSize: "34px", color: "#6e4c87" }} />
                <Stack direction="column" justifyContent="center" alignItems="center">

                    <Typography variant='h6'>
                        Sameer's Room
                    </Typography>
                    <Typography variant='body2'>Get Started</Typography>
                </Stack>
                <StyledTypograpy variant='body1'>Create</StyledTypograpy>
            </Stack>
        </RoomBox>
    )
}

export default Room