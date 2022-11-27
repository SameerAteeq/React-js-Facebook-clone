import { Call, Close, EmojiEmotions, Send, Videocam } from '@mui/icons-material';
import { Box, FilledInput, IconButton, InputAdornment, Popover, Popper, Stack, TextField, Tooltip, Typography } from '@mui/material';
import React from 'react'
import { messengerChat } from '../../../source';

const ChatsPopper = ({ anchorEl, setAnchorEl, userId }) => {

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        <Box sx={{ position: "absolute", top: 0, left: 0 }}>
            <Popover open={open} anchorEl={anchorEl} anchorReference="anchorPosition"
                anchorPosition={{ top: 500, left: 700 }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }} >
                <Stack direction="row" justifyContent="space-between" sx={{ backgroundColor: "#f7f7f7", padding: "8px" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" gap="10px">
                        <img src={userId?.imgUrl} alt='usrer-img' width="30px" height="30px" style={{ borderRadius: "50%" }} />
                        <Typography variant='p' sx={{ fontSize: "15px", color: "#333" }}>{userId?.name}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <IconButton>
                            <Call sx={{ fontSize: "24px", color: "#008ad3" }} />
                        </IconButton>
                        <IconButton>
                            <Videocam sx={{ fontSize: "24px", color: "#008ad3" }} />
                        </IconButton>
                        <IconButton onClick={handleClose}>
                            <Close sx={{ fontSize: "24px", color: "#008ad3" }} />
                        </IconButton>
                    </Stack>
                </Stack>
                <Box sx={{ height: "350px", overflowY: "scroll", padding: "5px" }}>
                    <Stack direction="row" gap="10px" justifyContent="flex-start" alignItems="center" maxWidth="400px" m="2px">
                        <img src={userId?.imgUrl} width="30px" height="30px" style={{ borderRadius: "50%" }} />
                        <Typography sx={{ display: "flex", justifyContent: "flex-start", padding: "8px", borderRadius: "10px", backgroundColor: "#dddd" }}>Hello</Typography>
                    </Stack>
                    <Stack direction="row" gap="10px" justifyContent="flex-start" alignItems="center" maxWidth="400px" m="2px">
                        <img src={userId?.imgUrl} width="30px" height="30px" style={{ borderRadius: "50%" }} />
                        <Typography sx={{ display: "flex", justifyContent: "flex-start", padding: "8px", borderRadius: "10px", backgroundColor: "#dddd" }}>How are you?</Typography>
                    </Stack>
                    <Stack direction="row" gap="10px" justifyContent="flex-end" alignItems="center" maxWidth="400px">
                        <Typography sx={{ borderRadius: "10px", maxWidth: "200px", padding: "8px", backgroundColor: "#008ad3", color: "#ffff" }}>Hey.! I am good what about you?</Typography>
                    </Stack>
                    <Stack direction="row" gap="10px" justifyContent="flex-start" alignItems="center" maxWidth="400px" m="2px">
                        <img src={userId?.imgUrl} width="30px" height="30px" style={{ borderRadius: "50%" }} />
                        <Typography sx={{ display: "flex", justifyContent: "flex-start", padding: "8px", borderRadius: "10px", backgroundColor: "#dddd" }}>I am fine bro</Typography>
                    </Stack>
                    <Stack direction="row" gap="10px" justifyContent="flex-start" alignItems="center" maxWidth="400px" m="2px">
                        <img src={userId?.imgUrl} width="30px" height="30px" style={{ borderRadius: "50%" }} />
                        <Typography sx={{ display: "flex", justifyContent: "flex-start", padding: "8px", borderRadius: "10px", backgroundColor: "#dddd", maxWidth: "200px" }}>What are you doing now a days..?</Typography>
                    </Stack>
                    <Stack direction="row" gap="10px" justifyContent="flex-end" alignItems="center" maxWidth="400px">
                        <Typography sx={{ borderRadius: "10px", maxWidth: "200px", padding: "8px", backgroundColor: "#008ad3", color: "#ffff", mb: "2px" }}>Nothing..</Typography>
                    </Stack>
                    <Stack direction="row" gap="10px" justifyContent="flex-end" alignItems="center" maxWidth="400px">
                        <Typography sx={{ borderRadius: "10px", maxWidth: "200px", padding: "8px", backgroundColor: "#008ad3", color: "#ffff" }}>Enjoing life..</Typography>
                    </Stack>
                </Box>
                <Stack direction="row" alignItems="center">
                    <Box>
                        {messengerChat?.map((item) => (
                            <IconButton key={item.id}>
                                <Tooltip title={item.tooltip}>
                                    {item.icon}
                                </Tooltip>
                            </IconButton>
                        ))}
                    </Box>
                    <FilledInput
                        placeholder='Aa'
                        disableUnderline
                        size='small'
                        sx={{ borderRadius: '50px', backgroundColor: "#f7f7f7", width: "120px" }}
                        endAdornment={
                            <InputAdornment position='end'>
                                <EmojiEmotions sx={{ fontSize: "24px", color: "#008ad3" }} />
                            </InputAdornment>
                        }
                    />
                    <IconButton>
                        <Send sx={{ fontSize: "24px", color: "#008ad3" }} />
                    </IconButton>
                </Stack>
            </Popover >
        </Box >
    );
}

export default ChatsPopper