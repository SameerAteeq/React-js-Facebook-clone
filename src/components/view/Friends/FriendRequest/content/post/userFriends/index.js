import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { fakeUsers } from '../../../../../../../source'

const UserFriends = () => {
    const StyledBox = styled(Box)(({ theme }) => ({
        width: "110px",
        height: "110px",
        borderRadius: "10px"
    }))
    const StyledImage = styled("img")(({ theme, src }) => ({
        src: `url(${src})`,
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }))
    return (
        <Box sx={{ backgroundColor: "#ffff", padding: "10px", borderRadius: "10px" }}>
            <Typography variant='h6' sx={{ mb: "10px" }}>Friends</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: '10px' }}>
                {fakeUsers.map((item) => (
                    <Stack direction="column" >
                        <StyledBox key={item.id} >
                            <StyledImage src={item.imgUrl} alt="userImage" />
                        </StyledBox>
                        <Typography variant='h6' sx={{ fontSize: "12px" }}>{item.name}</Typography>
                    </Stack>
                ))}
            </Box>
        </Box>
    )
}

export default UserFriends