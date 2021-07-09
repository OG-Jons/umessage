import {Button} from '@material-ui/core';
import {auth} from '../../server/firebaseConfig';

export default function SignOut() {
	return auth.currentUser && (
		<Button style={{float: 'right', marginLeft: 'auto'}} variant={'outlined'} color={'secondary'} onClick={() => auth.signOut()}>Sign Out</Button>
	);
}