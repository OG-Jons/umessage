import { AppBar, makeStyles, Toolbar, Typography, IconButton } from '@material-ui/core';
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Sidebar from '../Sidebar/Sidebar.component'

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'absolute',
    backgroundColor: '#F6F6F6',
    borderBottomLeftRadius: '15px', 
    borderBottomRightRadius: '15px'
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#000000',
    margin: 'auto',
    textAlign: 'center'
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  moon: {
    marginRight: theme.spacing(2),
    color: '#000000'
  },

  profile: {
    marginRight: theme.spacing(2),
    color: '#000000'
  }
}));

export default function MainHeader({ onClickHamburger, hamburger, onClickDarkmode, darkmode }) {

  const { header, logo, menuButton, moon, profile } = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={header}>
      <Toolbar>
        <Typography variant="h4" className={logo}>
          uMessage
        </Typography>
        {darkmode ? (
          <IconButton edge="end" className={moon} color="inherit" arial-label="moon" onClick={onClickDarkmode}>
            <WbSunnyOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton edge="end" className={moon} color="inherit" arial-label="moon" onClick={onClickDarkmode}>
            <Brightness2OutlinedIcon />
          </IconButton>
        )}
        <IconButton edge="end" className={profile} color="inherit" aria-label="profile">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
