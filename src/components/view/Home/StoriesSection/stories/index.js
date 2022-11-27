import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { StoriesData } from '../../../../../source'

const Stories = () => {
    const StoryImage = styled("img")(({ src }) => ({
        src: `url(${src})`,
        width: "110px",
        height: "200px",
        borderRadius: "10px",
        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
        transition: "all 0.5s ",
        "&:hover": {
            cursor: "pointer",
            opacity: "0.9",
            // transform: "scale(2.5)"
        }
    }))

    const StoryUserName = styled(Typography)({
        position: "absolute",
        bottom: "10px",
        left: "10px",
        color: "#fff",
        fontSize: "14px"
    })
    const StoryUserProfile = styled("img")(({ src }) => ({
        src: `url(${src})`,
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "10px",
        left: "10px",
        borderRadius: "50%",
        border: "4px solid #008ad3"
    }))

    return (
        <>
            <Stack direction="row" justifyContent="flex-start" gap="10px">
                <Box sx={{ position: "relative" }}>
                    <StoryImage src='https://images.unsplash.com/photo-1668934807819-536c2ca08a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    <StoryUserName variant='h6'>Your Story</StoryUserName>
                    <StoryUserProfile src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                </Box>

                {StoriesData?.slice(0, 2)?.map((item) => (
                    <Box key={item.id} sx={{ position: "relative", }} >
                        <StoryImage src={item.storyImg} />
                        <StoryUserName variant='h6'>{item.name}</StoryUserName>
                        <StoryUserProfile src={item.imgUrl} />
                    </Box>
                ))}
            </Stack>
        </>
    )
}

export default Stories