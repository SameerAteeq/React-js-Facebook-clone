import { ArrowBack, Settings } from '@mui/icons-material'
import { Box, Button, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fakeUsers, friendsSidebar } from '../../../../../source'

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <Box >
            <Box sx={{ width: "100%", backgroundColor: "#ffff", p: "10px" }} >
                <Stack direction="row" alignItems="center" gap="10px" mb="10px">
                    <IconButton onClick={() => navigate('/friends')}>
                        <ArrowBack />
                    </IconButton>
                    <Stack direction="column" >
                        <Typography variant='h6' sx={{ fontSize: "14px", color: "gray" }}>
                            Friends
                        </Typography>
                        <Typography variant='h4' sx={{ fontSize: "20px", color: "#333" }}>
                            Friends Requests
                        </Typography>
                    </Stack>
                </Stack>
                <Divider />
                <List>
                    <ListItem>
                        <Stack flexDirection="column" sx={{ width: "100%" }} >
                            {fakeUsers?.slice(0, 3)?.map(item => (
                                <div key={item.id} onClick={() => navigate(`/friends/request/${item.id}/post`)}>
                                    <Stack flexDirection="row" gap="10px" sx={{ padding: "8px", "&:hover": { backgroundColor: "#dfe1ee", borderRadius: "10px" }, cursor: "pointer", fontSize: "24px", width: "100%" }}>
                                        <img src={item?.imgUrl} width="50px" height="50px" style={{ borderRadius: "50%" }} />
                                        <Stack flexDirection="column" >
                                            <ListItemText primary={item.name} sx={{ fontSize: "24px", color: "#333", fontWeight: "bold" }} />
                                            <Stack direction="row" gap="10px" >
                                                <Button size="small" variant="contained" >Comfirm</Button>
                                                <Button size="small" variant="contained">Remove</Button>
                                            </Stack>
                                        </Stack>

                                    </Stack>
                                </div>
                            ))}
                        </Stack>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar