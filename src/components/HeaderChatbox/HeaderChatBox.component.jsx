import {
	Typography
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '8px 16px',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		height: '4rem',
		overflow: 'hidden',
		marginBottom: '1%',
		[theme.breakpoints.up('sm')]: {
			width: '100%',
			marginLeft: 0,
			marginBottom: theme.spacing(3),
		},
	},
}));

export default function HeaderChatBox(props) {
	const {title} = props;
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Typography variant="h5">{title}</Typography>
		</Paper>
	);
}
