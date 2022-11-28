import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, styled } from '@mui/material';
import { Close } from '@mui/icons-material';

const StyleBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    backgroundColor: 'black',
    boxShadow: 24,
    p: 1,
    height: 450
}));

const ProfileImage = styled("img")(({ theme, src }) => ({
    src: `url(${src})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // borderRadius: "50%",
    objectFit: "contain",
    cursor: "pointer"
}))
const ImageModal = ({ image, showImgModal, setShowImgModal }) => {



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setShowImgModal(false);
    console.log(image, "img")
    return (
        <div>
            <Modal
                open={showImgModal}
                onClose={handleClose}
            >
                <StyleBox>
                    <ProfileImage src={image} />
                </StyleBox>
            </Modal>
        </div>
    );
}
export default ImageModal;