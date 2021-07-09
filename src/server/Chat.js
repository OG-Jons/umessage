import {auth, db, firebase} from './firebaseConfig';

const setNewMessage = async (msg, chat) => {
	const {uid, photoURL, displayName} = auth.currentUser;

	const messagesRef =
        db.collection('chat')
        	.doc(chat)
        	.collection('messages');

	await messagesRef.add({
		text: msg,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		uid,
		photoURL,
		displayName
	});
};

const createGroup = async () => {
	//  TODO: add logic to create a new group
};

const deleteGroup = async () => {
	// TODO: add logic to delete a group
};

export {
	setNewMessage,
	createGroup,
	deleteGroup
};