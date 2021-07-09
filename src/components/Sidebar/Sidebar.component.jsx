import {
  Avatar,
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ThemeProvider,
  Box,
  Typography
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LanguageIcon from "@material-ui/icons/Language";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 40,
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#000000",
      opacity: 1,
    },
    "&$selected": {
      color: "#000000",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#000000",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  tab: {
    minWidth: 0,
    width: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000000",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  listItem: {
    width: "100%",
    maxWidth: 360,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  buttons: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
}));

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
              <Box p={0}>
                  <Typography>{children}</Typography>
              </Box>
          )}
      </div>
  )
}

function a11yProps(index) {
  return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function Sidebar(props) {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(1);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  //Activates again the Global Button. And deactivates the Button depending on which Chat has been clicked.
  const exampleClick = () => {
    console.log("Nick");
  };

  return (
    <div>
      <ThemeProvider theme={props.themeDarkmode}>
        <div className={classes.toolbar} />
        <Divider />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
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
							className={{ root: classes.tab }}
						>
							<AntTab icon={<PeopleIcon/>} {...a11yProps(0)}/>
							<AntTab icon={<EmojiPeopleIcon/>} {...a11yProps(1)}/>
							<AntTab icon={<LanguageIcon/>} {...a11yProps(2)}/>
						</Tabs>
					</Paper>
				</div>
				<List className={classes.listItem}>
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
  );
}
