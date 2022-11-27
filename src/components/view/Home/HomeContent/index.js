import { Message, MoreHoriz, Share, ThumbUp } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { red } from '@mui/material/colors';
import StoriesSection from '../StoriesSection';
import PostUpload from '../postUpload';

const HomeContent = () => {
    const HomeContentBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        maxWidth: 500,
        [theme.breakpoints.down('xs')]: {
            maxWidth: 600
        }
    }))
    return (
        <HomeContentBox >
            <StoriesSection />
            <PostUpload />
            <Card >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreHoriz />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="194"
                    image="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <Stack width={"100%"} direction={"row"} justifyContent="space-between" sx={{ borderBottom: "1px solid gray", borderTop: "1px solid gray", mt: "20px", mb: "20px" }}>
                        <IconButton disableFocusRipple aria-label="add to favorites">
                            <ThumbUp /> <Typography sx={{ fontSize: "18px" }} variant='h6'>Like</Typography>
                        </IconButton>
                        <IconButton aria-label="share">
                            <Message /> <Typography sx={{ fontSize: "18px" }} variant='h6'>Comment</Typography>
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share /> <Typography sx={{ fontSize: "18px" }} variant='h6'>Share</Typography>
                        </IconButton>
                    </Stack>
                </CardActions>
            </Card>
        </HomeContentBox >
    )
}

export default HomeContent