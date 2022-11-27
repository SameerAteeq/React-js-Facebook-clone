import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, IconButton, Stack, styled, TextField, Tooltip } from '@mui/material';
import { ArrowDownward, ArrowDropDown, Close, Group } from '@mui/icons-material';
import { PostUploadIcons } from '../../../../../source';


const ModalBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 400,
    backgroundColor: '#ffff',
    boxShadow: 24,
    borderRadius: "10px",
    [theme.breakpoints.down('sm')]: {
        width: 400,
        height: 400
    }
}))

const PostModal = ({ openModal, setOpenModal }) => {
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalBox >
                    <Stack direction="row" justifyContent="center" alignItems="center" position="relative" p="10px">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Create Post
                        </Typography>
                        <IconButton onClick={handleClose} sx={{ position: "absolute", top: "10px", right: "0px" }} >
                            <Close />
                        </IconButton>
                    </Stack>
                    <Divider fullWidth />
                    <Stack direction="column" p="10px" gap="10px">
                        <Stack direction="row" alignItems="center" gap="10px">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjb-Jsep9tAcYMGcwnDZl9MuXwtJ87LMh-KkFZT04M9XQRs6I0mWi4GJcUD7bTPEOAXRU&usqp=CAU" alt='userImage' style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                            <Stack direction="column" >
                                <Typography variant='h6' sx={{ fontSize: "16px" }}>
                                    Muhammad Sameer
                                </Typography>
                                <Stack direction="row" alignItems="center" justifyContent="flex-start" gap="4px" sx={{ backgroundColor: "#dddd", width: "max-Content", padding: "4px", borderRadius: "4px", cursor: "pointer" }}>
                                    <Group sx={{ fontSize: "16px" }} />
                                    <Typography variant='body2'>Friends</Typography>
                                    <ArrowDropDown sx={{ fontSize: "16px" }} />
                                </Stack>
                            </Stack>
                        </Stack>
                        <TextField
                            fullWidth
                            multiline
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                                sx: {
                                    fontSize: "24px"
                                }
                            }}
                            rows={4}
                            placeholder="What's on your mind, Sameer?"
                        />

                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ borderRadius: "10px", border: '1px solid grey', p: "8px" }}>
                            <Typography variant='h6' sx={{ fontSize: "16px", color: "#333", cursor: "pointer" }}>
                                Add to your post
                            </Typography>
                            <Stack direction="row" alignItems="center">
                                {PostUploadIcons?.map(item => (
                                    <IconButton key={item.id}>
                                        <Tooltip title={item.tooltip}>
                                            {item.icon}
                                        </Tooltip>
                                    </IconButton>
                                ))}
                            </Stack>
                        </Stack>
                        <Button variant='contained' fullWidth>Post</Button>
                    </Stack>
                </ModalBox>
            </Modal>
        </div >
    );
}
export default PostModal