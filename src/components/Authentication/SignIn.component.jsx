import {Button} from "@material-ui/core";
import {firebase, auth} from "../../server/firebaseConfig";

export default function SignInComponent() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(r => r);
    };

    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button style={{width: '500px', height: '10%', fontSize: '2rem'}} variant={'contained'} color={'primary'} onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
    );
}