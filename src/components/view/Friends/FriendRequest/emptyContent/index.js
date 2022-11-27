import { People } from '@mui/icons-material'
import { Box, IconButton, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const EmptyContent = () => {
    const StyledBox = styled(Box)({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"

    })
    return (
        <StyledBox sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Stack direction="column">
                <IconButton><People /></IconButton>
                <Typography variant="h6">Select people to see their profiles</Typography>
            </Stack>
        </StyledBox>
    )
}

export default EmptyContent