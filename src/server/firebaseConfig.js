import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBUWkuLQFz_hbJxQS6LsMf2o6BD417-FUM',
	authDomain: 'umessage-55d40.firebaseapp.com',
	projectId: 'umessage-55d40',
	storageBucket: 'umessage-55d40.appspot.com',
	messagingSenderId: '696598137954',
	appId: '1:696598137954:web:3cbe3bb936f0eff604953b',
	measurementId: 'G-LCSRCGH6LX'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();


export { firebase, db, auth };
