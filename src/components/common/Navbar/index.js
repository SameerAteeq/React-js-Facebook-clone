import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Facebook, Groups, Home, OndemandVideo, People, Search, StackedLineChartTwoTone, Storefront } from '@mui/icons-material';
import { FilledInput, InputAdornment, Stack, Tab, Tabs, Tooltip } from '@mui/material';
import { NavbarData, NavbarMidIcons, NavbarRightIcons } from '../../../source';
import { useNavigate, Outlet, NavLink } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";

    // const iconAction = (iconId) => {
    //     switch (iconId) {
    //         case "chat":
    //             setChat(true);
    //             break;
    //         case "not":
    //             setNit(true);
    //             break;
    //         default:
    //             break;
    //     }
    // }

    return (
        <Box >
            <AppBar position="fixed" sx={{ backgroundColor: "white", color: "gray" }} >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                    <Stack flex={"5"} direction={"row"} alignItems="center" gap="10px">
                        <img onClick={() => navigate("/")} src='../../../../assets/images/fblogo.png' width={"50px"} height={"50px"} style={{ cursor: "pointer" }} />
                        <Search sx={{ display: { xs: "block", xl: "none" }, fontSize: "35px" }} />
                        <Box sx={{ display: { xs: "none", xl: "block" } }} >
                            <FilledInput
                                sx={{ borderRadius: "50px" }}
                                size='small'
                                disableUnderline
                                id="filled-adornment-amount"
                                placeholder='Search Facebook'
                                startAdornment={
                                    <InputAdornment position="start" >
                                        <Search />
                                    </InputAdornment>}
                            />
                        </Box>
                    </Stack>
                    <Stack sx={{ display: { xs: "none", md: "flex" } }} flex={"9"} direction="row" alignItems="center" gap="50px">
                        {NavbarMidIcons.map((item) => (
                            <NavLink to={item.link} key={item.id} disableFocusRipple size="large" color="gray" sx={{ fontSize: "34px" }}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                            borderBottom: "3px solid #008ad3",
                                            width: "70px",
                                            color: "#008ad3",
                                            textAlign: "center",
                                            mb: "0"
                                        }
                                        : { color: "gray" }
                                }>
                                <Tooltip title={item.tooltip}>
                                    {item.icon}
                                </Tooltip>
                            </NavLink>
                        ))}
                    </Stack>
                    <Stack flex={"1"} direction={"row"} alignItems="center">
                        {NavbarRightIcons.map((item) => (
                            <IconButton key={item.id} disableFocusRipple size="large" color="gray">
                                <Tooltip title={item.tooltip}>
                                    {item.icon}
                                </Tooltip>
                            </IconButton>
                        ))}
                    </Stack>
                </Toolbar>
            </AppBar>
            <Outlet />
        </Box >
    );
}