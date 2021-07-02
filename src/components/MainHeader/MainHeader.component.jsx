import {
    Avatar,
    createMuiTheme,
    InputBase,
    ListItemAvatar,
    ThemeProvider,
    AppBar,
    CssBaseline,
    Divider,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography, Box,
} from '@material-ui/core'
import {fade, makeStyles, useTheme, withStyles} from '@material-ui/core/styles'
import {useState} from 'react'
import ChatBox from '../Chatbox/Chatbox.component'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import {deepPurple} from '@material-ui/core/colors'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PeopleIcon from '@material-ui/icons/People'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import LanguageIcon from '@material-ui/icons/Language'
import PropTypes from 'prop-types'

const drawerWidth = 240

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 40,
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#000000',
            opacity: 1,
        },
        '&$selected': {
            color: '#000000',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#000000',
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />)


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    tab: {
        minWidth: 0,
        width: 0
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        position: 'absolute',
        backgroundColor: deepPurple[900],
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
        color: '#ffffff',
    },

    profile: {
        marginRight: theme.spacing(2),
        color: '#ffffff',
    },

    logo: {
        fontFamily: 'Work Sans, sans-serif',
        fontWeight: 600,
        color: '#ffffff',
    },

    buttons: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        padding: '10px',
    },

    button: {
        margin: '1%',
    },
}))

function TabPanel(props) {
    const {children, value, index, ...other} = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function MainHeader() {
    const classes = useStyles()
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [tabValue, setTabValue] = useState(1)

    const themeDarkmode = createMuiTheme({
        palette: {
            type: clicked ? 'dark' : 'light',
        },
    })

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    //Activates again the Global Button. And deactivates the Button depending on which Chat has been clicked.
    const exampleClick = () => {
        console.log('Nick')
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
                    <Paper square>
                        <Tabs
                            value={tabValue}
                            indicatorColor="secondary"
                            onChange={handleTabChange}
                            variant="fullWidth"
                            scrollButtons="off"
                            aria-label="scrollable prevent tabs example"
                            className={{root: classes.tab}}
                        >
                            <AntTab icon={<PeopleIcon/>} {...a11yProps(0)}/>
                            <AntTab icon={<EmojiPeopleIcon/>} {...a11yProps(1)}/>
                            <AntTab icon={<LanguageIcon/>} {...a11yProps(2)}/>
                        </Tabs>
                    </Paper>
                </div>
                <List className={classes.ListItem}>
                    <TabPanel index={tabValue} value={0}>
                        <ListItem button onClick={exampleClick}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Klasse 123" secondary="Schick lösige"/>
                        </ListItem>
                    </TabPanel>
                    <TabPanel index={tabValue} value={1}>
                        <ListItem button onClick={exampleClick}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Fabian" secondary="Chömet On"/>
                        </ListItem>
                    </TabPanel>
                </List>
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
                        {clicked ? (
                            <IconButton
                                edge="end"
                                color="inherit"
                                arial-label="menu"
                                className={classes.darkModeIcons}
                                onClick={() => setClicked(!clicked)}
                            >
                                <WbSunnyIcon/>
                            </IconButton>
                        ) : (
                            <IconButton
                                edge="end"
                                color="inherit"
                                arial-label="menu"
                                className={classes.darkModeIcons}
                                onClick={() => setClicked(!clicked)}
                            >
                                <Brightness2Icon/>
                            </IconButton>
                        )}
                        <IconButton
                            edge="end"
                            className={classes.profile}
                            color="inherit"
                            aria-label="profile"
                        >
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
