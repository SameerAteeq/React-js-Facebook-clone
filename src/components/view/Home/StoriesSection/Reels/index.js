import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { StoriesData } from '../../../../../source'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PlayArrow } from '@mui/icons-material';
const Reels = () => {
    const StoryImage = styled("img")(({ src }) => ({
        src: `url(${src})`,
        width: "110px",
        height: "200px",
        borderRadius: "10px",
        backgroundPosition: "cover",
        // transition: "all 0.5s ",
        "&:hover": {
            cursor: "pointer",
            // transform: "scale(1.05)"
        }
    }))

    const StoryUserName = styled(Typography)({
        position: "absolute",
        bottom: "10px",
        left: "10px",
        color: "#fff",
        fontSize: "14px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
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
            <Stack direction="row" alignItems="center" gap="10px">
                {/* <Box sx={{ position: "relative" }}>
                    <StoryImage src='https://images.unsplash.com/photo-1668934807819-536c2ca08a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    <StoryUserName variant='h6'>Your Story</StoryUserName>
                    <StoryUserProfile src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=160' />
                </Box> */}

                {StoriesData?.slice(0, 3)?.map((item) => (
                    <Box key={item.id} sx={{ position: "relative" }} >
                        <StoryImage src={item.storyImg} />
                        <StoryUserName >
                            <PlayArrow sx={{ fontSize: "14px" }} />
                            <Typography sx={{ fontSize: "12px" }} variant='h6'>{item.view}</Typography>
                        </StoryUserName>
                        {/* <StoryUserProfile src={item.imgUrl} /> */}
                    </Box>
                ))}
            </Stack>
        </>
    )
}

export default Reels