import {
    AppBar, IconButton, Toolbar,
    Typography
} from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import MenuIcon from "@material-ui/icons/Menu";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "absolute",
    backgroundColor: deepPurple[900],
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      marginLeft: drawerWidth,
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000000",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  darkModeIcons: {
    marginRight: theme.spacing(0),
    color: "#ffffff",
  },
  profile: {
    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#ffffff",
  },
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.logo}>
            uMessage
          </Typography>
          {props.clicked ? (
            <IconButton
              edge="end"
              color="inherit"
              arial-label="menu"
              className={classes.darkModeIcons}
              onClick={() => props.setClicked(!props.clicked)}
            >
              <WbSunnyIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              arial-label="menu"
              className={classes.darkModeIcons}
              onClick={() => props.setClicked(!props.clicked)}
            >
              <Brightness2Icon />
            </IconButton>
          )}
          <IconButton
            edge="end"
            className={classes.profile}
            color="inherit"
            aria-label="profile"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
}