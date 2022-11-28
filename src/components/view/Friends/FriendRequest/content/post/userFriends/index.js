import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fakeUsers } from '../../../../../../../source'

const UserFriends = () => {
    const navigate = useNavigate()
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
                    <div key={item.id} onClick={() => navigate(`/friends/request/${item.id}/post`)}>
                        <Stack direction="column" sx={{ cursor: "pointer" }} >
                            <StyledBox  >
                                <StyledImage src={item.imgUrl} alt="userImage" />
                            </StyledBox>
                            <Typography variant='h6' sx={{ fontSize: "12px" }}>{item.name}</Typography>
                        </Stack>
                    </div>
                ))}
            </Box>
        </Box>
    )
}

export default UserFriends