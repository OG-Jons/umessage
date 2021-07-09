import {
	createMuiTheme,
	CssBaseline,
	Drawer,
	Hidden, ThemeProvider
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import ChatBox from '../Chatbox/Chatbox.component';
import Sidebar from '../Sidebar/Sidebar.component';
import Header from '../Header/Header.component';

const drawerWidth = 240;

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
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function Main() {
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [clicked, setClicked] = useState(false);

	const themeDarkmode = createMuiTheme({
		palette: {
			type: clicked ? 'dark' : 'light',
		},
	});

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<div className={classes.root}>
			<ThemeProvider theme={themeDarkmode}>
				<CssBaseline />
				<Header handleDrawerToggle={handleDrawerToggle} clicked={clicked} setClicked={setClicked}/>
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
							<Sidebar themeDarkmode={themeDarkmode} />
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
							<Sidebar themeDarkmode={themeDarkmode} />
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<ChatBox />
				</main>
			</ThemeProvider>
		</div>
	);
}
