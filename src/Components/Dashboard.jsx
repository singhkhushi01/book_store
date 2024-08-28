import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';

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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MediaCard from './card';
import './Dashboard.css';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



function ResponsiveAppBar() {
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

  return (<>
    <AppBar position="static">
      <Container maxWidth="xl" style={{
        display: "flex",
        flexdirection: "row",
        padding: "10px 30px"
      }}>
          <div>
          <MenuBookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            Book Store
          </Typography>

          </div>
          <div className="searchbar">
            <input style={{
              outline:"none",
              border:"none",
              width: 400 ,
              height: 30,
              borderRadius: 50,
              marginLeft: 10
              
            }} type="text" placeholder='Search'></input>
            <SearchIcon style={
              {
                width:40,
                display: "flex",

              }
            }></SearchIcon>
          </div>
      
      </Container>
      
    </AppBar>
    
    <div style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }}>

    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    <MediaCard></MediaCard>
    </div>
    
    </>
  );
}
export default ResponsiveAppBar;
