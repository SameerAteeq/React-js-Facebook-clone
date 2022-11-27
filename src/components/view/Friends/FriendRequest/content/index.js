import { Message, PersonAdd } from '@mui/icons-material'
import { Box, Button, Divider, Grid, Stack, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { fakeUsers, UserLinks } from '../../../../../source'
import EmptyContent from '../emptyContent'
import UserProfilePost from './post'

const Content = () => {
    const { id } = useParams();
    const [user, setUser] = useState()
    useEffect(() => {
        setUser(fakeUsers?.find(item => item.id === +id));
    }, [id])
    const CoverPhoto = styled("img")(({ theme, src }) => ({
        src: `url(${src})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        objectFit: "cover",
        cursor: "pointer"

    }))
    const ProfileImage = styled("img")(({ theme, src }) => ({
        src: `url(${src})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "50%",
        border: "4px solid #ffff",
        objectFit: "cover",
        cursor: "pointer"
    }))

    const StyleStack = styled(Stack)(({ theme }) => ({
        // marginLeft: "239px",
        direction: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        p: "10px",
        [theme.breakpoints.down('sm')]: {
            // direction: "column",
            mt: "230px"
        }
    }))
    return (
        <>
            <Box>
                {user ?
                    <>
                        <Box sx={{ backgroundColor: "#fffff" }}>

                            <Box sx={{ p: "10px", position: "relative" }}>
                                <Box sx={{
                                    width: "100%",
                                    height: "350px"
                                }}>
                                    <CoverPhoto src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

                                </Box>
                                <Box sx={{
                                    width: "180px",
                                    height: "180px", position: "absolute",
                                    top: "250px",
                                    left: {
                                        xs: "250px", lg: "50px"
                                    }
                                }}>
                                    <ProfileImage src={user?.imgUrl} />
                                </Box>
                            </Box>
                            <Stack sx={{
                                direction: "row",
                                justifyContent: "space-between",
                                // alignItems: 'center',
                                // p: "10px",
                            }} >

                                <Typography variant='h4' sx={{ fontWeight: "bold" }}>{user?.name}</Typography>
                                <Stack direction="row" gap="10px">
                                    <Button size="small" variant='contained' startIcon={<PersonAdd />}  >Add Friend</Button>
                                    <Button size="small" variant='contained' startIcon={<Message />} >Message</Button>
                                </Stack>
                            </Stack>
                            <Divider sx={{ mt: '40px', mb: "40px" }} />
                            {UserLinks.map((item) => (
                                <NavLink to={item.link} >
                                    <Button key={item.id}>
                                        {item.name}
                                    </Button>
                                </NavLink>
                            ))}
                            <Box sx={{ backgroundColor: "#ddd" }}>
                                <UserProfilePost {...{ user, setUser }} />
                            </Box>
                        </Box>
                    </>
                    : <EmptyContent />}
            </Box>
        </>
    )
}

export default Content