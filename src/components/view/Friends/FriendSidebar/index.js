import { Settings } from '@mui/icons-material'
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { friendsSidebar } from '../../../../source'

const FriendSidebar = () => {
    const navigate = useNavigate()
    return (
        <Box >
            <Box sx={{ width: "100%", backgroundColor: "#ffff", p: "10px" }} >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant='h6'>
                        Friends
                    </Typography>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </Stack>
                <List>
                    <ListItem>
                        <Stack flexDirection="column" sx={{ width: "100%" }} >
                            {friendsSidebar.map(item => (
                                <div key={item.id} onClick={() => navigate(item.link)}>
                                    <Stack flexDirection="row" sx={{ padding: "8px", "&:hover": { backgroundColor: "#dfe1ee" }, cursor: "pointer", fontSize: "24px", width: "100%" }}>


                                        <ListItemIcon sx={{ minWidth: 0, mr: "10px", color: "inherit" }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} sx={{ fontSize: "24px", color: "#333", fontWeight: "bold" }} />

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

export default FriendSidebar