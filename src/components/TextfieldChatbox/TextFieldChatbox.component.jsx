import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: 0,
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '100vw',
		marginRight: theme.spacing(1),
		marginLeft: theme.spacing(-3),
		height: '4rem',
		[theme.breakpoints.up('sm')]: {
			width: 'calc(100% - 280px)',
			marginLeft: 0,
			marginBottom: theme.spacing(3),
		},
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
		fontSize: '1.2rem',
	},
	iconButton: {
		padding: 10,
		marginRight: 20,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

export default function ChatBox() {
	const classes = useStyles();

	const [input, setInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim() === '') return;
		console.log(input);
		setInput('');
	};

	return (
		<Paper component="form" className={classes.root} onSubmit={handleSubmit}>
			<InputBase
				className={classes.input}
				placeholder="Message: "
				inputProps={{ 'aria-label': 'enter message' }}
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
			<IconButton type="submit" className={classes.iconButton} aria-label="search">
				<SendIcon />
			</IconButton>
		</Paper>
	);
}