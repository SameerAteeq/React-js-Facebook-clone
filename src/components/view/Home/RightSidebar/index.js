import { CheckOutlined, MoreHoriz, Search, VideoCall } from '@mui/icons-material'
import { Box, Divider, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { fakeUsers } from '../../../../source'
import ChatsPopper from '../../chatPopover'

const RightSidebar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [userId, setUserId] = useState();
    const handleClick = (event, id) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        const findUser = fakeUsers.find(x => x.id === id);
        setUserId(findUser);
    };
    return (
        <Box position={"fixed"} color="gray" >
            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} >
                <Box>
                    <Typography variant="p">
                        Contact
                    </Typography>
                </Box>
                <Box>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                        <IconButton>
                            <VideoCall />
                        </IconButton>
                        <IconButton>
                            <Search />
                        </IconButton>
                        <IconButton>
                            <MoreHoriz />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
            <Box sx={{ width: "100%" }}>
                <List>
                    <ListItem>
                        <Stack flexDirection="column" >

                            {fakeUsers?.map((item) => (
                                <div key={item.id} onClick={(e) => handleClick(e, item.id)}>
                                    <Stack flexDirection={"row"} sx={{ fontSize: "12px", cursor: "pointer", padding: "8px", mb: "5px", "&:hover": { backgroundColor: "#dfe1ee", borderRadius: "10px" } }} gap="10px">
                                        <img src={item.imgUrl} alt="userimg" width="30px" height="30px" style={{ borderRadius: "50%" }} />
                                        <ListItemText sx={{ fontSize: "12px" }}>

                                            {item.name}
                                        </ListItemText>
                                    </Stack>
                                </div>
                            ))}
                        </Stack>
                    </ListItem>
                </List>
            </Box>
            <Divider />
            <ChatsPopper anchorEl={anchorEl} setAnchorEl={setAnchorEl} userId={userId} />
        </Box>
    )
}

export default RightSidebar