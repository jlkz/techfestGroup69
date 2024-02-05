import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate} from 'react-router-dom'; 


const pages = ['ImageCaption', 'AfterMatch', 'Chatbot'];
const settings = ['Profile', 'Sign In', 'Logout'];



function ResponsiveAppBar() {
    const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MingleMakan
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              

                <MenuItem key="ImageCaption" onClick = {() => navigate("/imagecaption")}>
                  <Typography textAlign="center">Image Caption</Typography>
                </MenuItem>
                <MenuItem key="AfterMatch" onClick = {() => navigate("/aftermatch")}>
                  <Typography textAlign="center">After Match</Typography>
                </MenuItem>
                <MenuItem key="Chatbot" onClick = {() => navigate("/chatbot")}>
                  <Typography textAlign="center">Chatbot</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MingleMakan
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            <Button
                key="ImageCaption"
                onClick={() => navigate("/ImageCaption")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Image Caption
            </Button>

            <Button
                key="AfterMatch"
                onClick={() => navigate("/AfterMatch")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                After Match
            </Button>

            <Button
                key="Chatbot"
                onClick={() => navigate("/Chatbot")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Chatbot
            </Button>


          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/profile-user.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              

                <MenuItem key="profile" onClick = {() => navigate("/profile")}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem key="signin" onClick = {() => navigate("/signin")}>
                  <Typography textAlign="center">Sign In</Typography>
                </MenuItem>
                <MenuItem key="logout" onClick = {() => navigate("/logout")}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
=======
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/SignIn">
                        Sign In
                    </NavLink>
                    <NavLink to="/SignUp">
                        Sign Up
                    </NavLink>
                    <NavLink to="/ImageCaption">
                        ImageCaption
                    </NavLink>
                    <NavLink to="/AfterMatch">
                        AfterMatch
                    </NavLink>
                    <NavLink to="/FoodDiscount">
                        Food Discount
                    </NavLink>
                    <NavLink to="/chatbot">
                        ChatBot
                    </NavLink>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
