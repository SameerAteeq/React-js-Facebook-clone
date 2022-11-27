import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fakeUsers } from '../../../../source'

const FriendsContent = () => {
    const navigate = useNavigate()
    const [cancelReq, setcancelReq] = useState([]);
    const [sentFReq, setFReq] = useState([]);
    const handleClick = (id) => {
        const findUser = fakeUsers.find(x => x.id === id);
        setFReq(prev => [...prev, findUser]);
        console.log(sentFReq, "req")
        // setAddFriend(findUser);
    }
    const cancelFriendReq = (id) => {
        const canelRequestArray = sentFReq.filter(x => x.id !== id);
        setFReq(canelRequestArray);
        console.log(canelRequestArray, "cance")
    }

    return (
        <Box sx={{ backgroundColor: '#dddd', height: "100%", p: "20px" }}>
            <Typography variant='h6' sx={{ mt: 3, mb: 3 }}>
                Friend Requests
            </Typography>
            <Stack direction="row" alignItems="center" gap="10px" mb="40px" >
                {fakeUsers?.slice(0, 3)?.map(item => (
                    <Card key={item.id} sx={{ width: 220 }}>
                        <CardMedia
                            component="img"
                            height="230"
                            image={item?.imgUrl}
                            sx={{ cursor: "pointer" }}
                            onClick={() => navigate(`/friends/request/${item.id}`)}
                        />
                        <CardContent sx={{ overflowX: "hidden", width: "100%" }}>
                            <Typography variant='h6' component="div" sx={{ fontSize: "18px", width: "100%", overflowX: "hidden", }}>
                                {item?.name}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                            <Button variant="contained" fullWidth >
                                Confirm
                            </Button>
                            <Button variant="contained" fullWidth sx={{
                                backgroundColor: "#ddd", color: "#333", "&:hover": {
                                    backgroundColor: "#f7f7f7"
                                }
                            }}>
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Stack>
            <Divider />
            <Typography variant='h6' sx={{ mt: 3, mb: 3 }}>
                People You May Know
            </Typography>
            <Stack direction="row" alignItems="center" gap="10px" mb="40px" flexWrap="wrap" >
                {fakeUsers?.map(item => (
                    <Card key={item.id} sx={{ width: 220 }}>
                        <CardMedia
                            component="img"
                            height="230"
                            image={item?.imgUrl}
                            sx={{ cursor: "pointer" }}
                            onClick={() => navigate(`/friends/request/${item.id}`)}
                        />
                        <CardContent sx={{ overflowX: "hidden", width: "100%" }}>
                            <Typography variant='h6' component="div" sx={{ fontSize: "18px", width: "100%", overflowX: "hidden", }}>
                                {item?.name}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                            {!sentFReq.find(x => x.id === item.id) ?

                                (<>
                                    <Button onClick={(e) => handleClick(item.id)} variant="contained" fullWidth sx={{
                                        backgroundColor: "aliceblue", color: "#008ad3", "&:hover": {
                                            backgroundColor: "#ddd"
                                        }
                                    }}>
                                        Add Friend
                                    </Button>
                                    <Button variant="contained" fullWidth sx={{
                                        backgroundColor: "#ddd", color: "#333", "&:hover": {
                                            backgroundColor: "#f7f7f7"
                                        }
                                    }}>
                                        Remove
                                    </Button>
                                </>) : <Button onClick={(e) => cancelFriendReq(item.id)} variant="contained" fullWidth sx={{
                                    backgroundColor: "#ddd", color: "#333", "&:hover": {
                                        backgroundColor: "#f7f7f7"
                                    }
                                }}
                                >
                                    Cancel
                                </Button>
                            }
                            {/* {sentFReq.find(x => x.id !== item.id) &&
                                <Button onClick={(e) => handleClick(item.id)} variant="contained" fullWidth sx={{
                                    backgroundColor: "#ddd", color: "#333", "&:hover": {
                                        backgroundColor: "#f7f7f7"
                                    }
                                }}
                                >
                                    Cancel
                                </Button>
                            } */}

                        </CardActions>
                    </Card>
                ))}
            </Stack>
        </Box >
    )
}

export default FriendsContent