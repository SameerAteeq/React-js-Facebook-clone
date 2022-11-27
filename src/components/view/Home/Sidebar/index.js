import { Box, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material'
import React from 'react'
import { HomeSidebarData } from '../../../../source'

const HomeSidebar = () => {
    return (
        <Box position={"fixed"} >
            <Box sx={{ width: "100%" }} >
                <List>
                    <ListItem>
                        <Stack flexDirection="column" sx={{ width: "100%" }} >
                            {HomeSidebarData.map(item => (
                                <Stack key={item.id} flexDirection="row" sx={{ padding: "8px", "&:hover": { backgroundColor: "#dfe1ee" }, cursor: "pointer", fontSize: "24px", width: "100%" }}>
                                    <ListItemIcon sx={{ minWidth: 0, mr: "10px" }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} sx={{ fontSize: "24px", color: "#333", fontWeight: "bold" }} />

                                </Stack>
                            ))}
                        </Stack>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default HomeSidebar