// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
//
// const drawerWidth = 250;
//
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex'
//   },
//   drawer: {
//     [theme.breakpoints.up('sm')]: {
//       width: drawerWidth,
//       flexShrink: 0,
//       top: '15%'
//     }
//   },
//   appBar: {
//     [theme.breakpoints.up('sm')]: {
//       width: '100%',
//       marginLeft: drawerWidth,
//       zIndex: theme.zIndex.drawer + 1,
//     }
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none'
//     }
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   logo: {
//     textAlign: "center"
//   }
// }));
//
// function ResponsiveDrawer(props) {
//   const { window } = props;
//   const classes = useStyles();
//   const theme = useTheme();
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
//
//   const drawer = (
//     <div>
//       <div className={classes.toolbar} />
//         Toolbar
//     </div>
//   );
//
//   const container = window !== undefined ? () => window().document.body : undefined;
//
//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar className={classes.toolBar}>
//           <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             uMessage
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <nav className={classes.drawer} aria-label="mailbox folders">
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Hidden smUp implementation="css">
//           <Drawer
//             container={container}
//             variant="temporary"
//             anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper
//             }}
//             ModalProps={{
//               keepMounted: true // Better open performance on mobile.
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden xsDown implementation="css">
//           <Drawer
//             classes={{
//               paper: classes.drawerPaper
//             }}
//             variant="permanent"
//             open
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//       </nav>
//     </div>
//   );
// }
//
// export default ResponsiveDrawer;

import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
//import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
//import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
//import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {fade, makeStyles, useTheme} from '@material-ui/core/styles'
import ChatBox from '../Chatbox/Chatbox.component'
import {useState} from 'react'
import {Avatar, Button, createMuiTheme, InputBase, ListItemAvatar, ThemeProvider} from '@material-ui/core'
//import ImageIcon from '@material-ui/icons/Image'
//import WorkIcon from '@material-ui/icons/Work'
//import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness2Icon from '@material-ui/icons/Brightness2'
//import Grid from '@material-ui/core/Grid'
//import ToggleButton from '@material-ui/lab/ToggleButton'
//import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
///import LaptopIcon from '@material-ui/icons/Laptop'
//import TvIcon from '@material-ui/icons/Tv'
//import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import AddIcon from '@material-ui/icons/Add';

const drawerWidth = 240


const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            position: 'absolute',
            backgroundColor: '#F6F6F6',
            [theme.breakpoints.up('sm')]: {
                width: '100%',
                marginLeft: drawerWidth,
                zIndex: theme.zIndex.drawer + 1,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: '#000000',
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },

        ListItem: {
            width: '100%',
            maxWidth: 360,
        },

        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.black, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                marginTop: theme.spacing(1),
                width: 'auto',
            },
        },

        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },

        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },

        darkModeIcons: {
            marginRight: theme.spacing(0),
            color: '#000000'
        },

        profile: {
            marginRight: theme.spacing(2),
            color: '#000000'
        },

        logo: {
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 600,
            color: '#000000',
        },

        buttons: {
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(2),
            marginTop: theme.spacing(1),
            padding: '10px',

        },

        button: {
            margin: '1%',
        }

    })
)

export default function MainHeader() {
    const classes = useStyles()
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [buttonGroup, setButtonGroup] = useState(false)
    const [buttonPrivate, setButtonPrivate] = useState(true)
    const [buttonGlobal, setButtonGlobal] = useState(false)

    const themeDarkmode = createMuiTheme({
        palette: {
            type: clicked ? 'dark' : 'light',
        },
    })

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const handleClickGroup = () => {
        setButtonGroup(true)
        setButtonPrivate(false)
    }

    const handleClickPrivate = () => {
        setButtonGroup(false)
        setButtonPrivate(true)
    }

    const handleClickGlobal = () => {
        setButtonGroup(false)
        setButtonPrivate(false)
        setButtonGlobal(true)
    }

    const exampleClick = () => {
        if (buttonPrivate === false) {
            setButtonGroup(true)
            setButtonGlobal(false)
            setButtonPrivate(false)
        } if (buttonGroup === false) {
            setButtonGroup(false)
            setButtonGlobal(false)
            setButtonPrivate(true)
        } else {
            setButtonGroup(true)
            setButtonGlobal(false)
            setButtonPrivate(false)
        }

    }

    const drawer = (
        <div>
            <ThemeProvider theme={themeDarkmode}>
                <div className={classes.toolbar}/>
                <Divider/>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{'aria-label': 'search'}}
                    />
                </div>
                <div className={classes.buttons}>
                    <Button variant="contained" className={classes.button} onClick={handleClickGroup}
                            disabled={buttonGroup}>
                        Group
                    </Button>
                    <Button variant="contained" className={classes.button} onClick={handleClickPrivate}
                            disabled={buttonPrivate}>
                        Private
                    </Button>
                    <Button variant="contained" className={classes.button} onClick={handleClickGlobal}
                            disabled={buttonGlobal}>
                        Global
                    </Button>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                </div>
                {buttonGroup ?
                    <List className={classes.ListItem}>
                        <ListItem button onClick={exampleClick}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Klasse 123" secondary="Schick lösige"/>
                        </ListItem>
                        <ListItem button onClick={exampleClick}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Klasse12345" secondary="Chömet On"/>
                        </ListItem>
                    </List>
                    :
                    <List className={classes.ListItem}>
                        <ListItem button onClick={exampleClick}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Fabian Odermatt" secondary="Lol"/>
                        </ListItem>
                        <ListItem button onClick={exampleClick}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Silvan Chervet" secondary="</>"/>
                        </ListItem>
                        <ListItem button onClick={exampleClick}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Jonas Marschall" secondary="Hey was geht"/>
                        </ListItem>
                    </List>
                }
            </ThemeProvider>
        </div>
    )


    return (
        <div className={classes.root}>
            <ThemeProvider theme={themeDarkmode}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap className={classes.logo}>
                            uMessage
                        </Typography>
                        {clicked ?
                            <IconButton edge="end" color="inherit" arial-label="menu" className={classes.darkModeIcons}
                                        onClick={() => setClicked(!clicked)}>
                                <WbSunnyIcon/>
                            </IconButton>
                            :
                            <IconButton edge="end" color="inherit" arial-label="menu" className={classes.darkModeIcons}
                                        onClick={() => setClicked(!clicked)}>
                                <Brightness2Icon/>
                            </IconButton>
                        }
                        <IconButton edge="end" className={classes.profile} color="inherit" aria-label="profile">
                            <AccountCircleIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <ChatBox/>
                </main>
            </ThemeProvider>
        </div>
    )
}