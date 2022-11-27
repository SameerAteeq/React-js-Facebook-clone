import { EmojiEmotions, PhotoLibrary, VideoCameraBack } from '@mui/icons-material'
import { Box, Divider, FilledInput, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import PostModal from './postModal';

const PostUpload = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <Box sx={{ backgroundColor: "#ffffff", width: "100%" }}>
            < Box sx={{
                backgroundColor: "#ffffff", padding: "8px", width: "100%"
            }}>
                <Stack direction="row" alignItems="center" gap="10px" mb="10px">
                    <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' width="35px" height="35px" style={{ borderRadius: "50%", cursor: "pointer" }} />
                    <FilledInput
                        sx={{ borderRadius: "50px" }}
                        disableUnderline
                        placeholder="What's on your mind, Sameer?"
                        size='small'
                        fullWidth
                        onClick={handleOpen}
                        inputProps={{
                            sx: {
                                cursor: "pointer"
                            }
                        }}
                    />
                </Stack>
                <Divider />
                <Stack width="100%" overflow="hidden" direction="row" justifyContent="space-between" alignItems="center" padding="8px">
                    <Stack direction="row" justifyContent="center" alignItems="center">
                        <IconButton>
                            <VideoCameraBack sx={{ color: "#Be2525" }} />
                        </IconButton>
                        <Typography variant='body2'>Live video</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center">
                        <IconButton>
                            <PhotoLibrary sx={{ color: "#7bdc3f" }} />
                        </IconButton>
                        <Typography variant='body2'>Photo/video</Typography>
                    </Stack>
                    <Stack sx={{ display: { xs: "none", md: "inline-block" } }} direction="row" justifyContent="center" alignItems="center">
                        <IconButton >
                            <EmojiEmotions sx={{ color: "#Dce433" }} />
                        </IconButton>
                        <Typography variant='body2'>Feeling/activity</Typography>
                    </Stack>
                </Stack>
            </Box >
            <PostModal openModal={openModal} setOpenModal={setOpenModal} />
        </Box >
    )
}

export default PostUpload