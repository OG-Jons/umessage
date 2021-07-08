import TextFieldChatbox from '../TextfieldChatbox/TextFieldChatbox.component'
import HeaderChatBox from '../HeaderChatbox/HeaderChatBox.component'
import './Chatbox.style.css'
import Message from '../Message/Message.component'
import {useRef, useState} from "react";
import {auth, db, firebase} from "../../server/firebaseConfig";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useAuthState} from "react-firebase-hooks/auth";

export default function Chatbox() {
    const dummy = useRef();
    const globalChatRef = db.collection('globalchat');
    const query = globalChatRef.orderBy('createdAt');

    const [messages] = useCollectionData(query, {idField: 'id'});

    async function sendMessage(input) {

        const { uid, photoURL, displayName } = auth.currentUser;

        await globalChatRef.add({
            text: input,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            displayName: displayName,
            uid,
            photoURL
        })


        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <HeaderChatBox/>
            <Message messages={messages} />
            <span ref={dummy}/>
            <TextFieldChatbox send={sendMessage}/>
        </div>
    )
}
