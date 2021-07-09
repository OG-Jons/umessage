import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Box} from '@material-ui/core';
import './Message.style.css';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../server/firebaseConfig';

const useStyles = makeStyles({
	message: {
		display: 'flex',
		width: 'max-content',
		maxWidth: '40vw',
		marginBottom: 5,
		flexDirection: 'column',

	},
	root: {
		width: '100%',
		height: '91ex',
		overflowY: 'scroll',
		zIndex: -1,
		paddingBottom: 1
	},
	parent: {
		width: '100%',
		display: 'flex',
	},

	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},

	received: {
		justifyContent: 'flex-start',
		borderBottomLeftRadius: 0
	},

	send: {
		justifyContent: 'flex-end'
	},

});

export default function Message(props) {
	const [user] = useAuthState(auth);
	const {messages} = props;
	const classes = useStyles();

	if (messages) {
		return (
			<Box className={`${classes.root} chatBox`}>
				{messages.map((message, idx) => (
					<div className={`${classes.parent} ${message.uid === user.uid ? classes.send : classes.received}`}
						 key={idx}>
						<Card className={classes.message} variant="outlined" height={'75%'}>
							<CardContent>
								<Typography className={classes.title} color="textSecondary" gutterBottom>
									{message.displayName}
								</Typography>
								<Typography variant="body2" component="p">
									{message.text}
								</Typography>
							</CardContent>
						</Card>
					</div>
				))}
			</Box>
		);
	} else return <></>;
}