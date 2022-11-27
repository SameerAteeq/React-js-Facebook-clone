import { Message, MoreHoriz, Share, ThumbUp } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfilePicture = ({ user }) => {
    console.log(user, "inprofieoicture")
    return (
        <>
            <Card sx={{ mb: "10px", borderRadius: "10px" }}>
                <CardHeader
                    avatar={
                        <Avatar src={user.imgUrl}>

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreHoriz />
                        </IconButton>
                    }
                    title={`${user.name} updated his profile picture.`}
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="350"
                    image={user.imgUrl}
                    alt="user-image"
                    sx={{ objectFit: "inherit", backgroundPosition: "center" }}
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
            <Card sx={{ mb: "10px", borderRadius: "10px" }}>
                <CardHeader
                    avatar={
                        <Avatar src={user.imgUrl}>

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreHoriz />
                        </IconButton>
                    }
                    title={`${user.name} updated his cover photo.`}
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="350"
                    image={user.imgUrl}
                    alt="user-image"
                    sx={{ objectFit: "inherit", backgroundPosition: "center" }}
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
        </>
    )
}

export default UserProfilePicture