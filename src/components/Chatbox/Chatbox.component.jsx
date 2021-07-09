import TextFieldChatbox from '../TextfieldChatbox/TextFieldChatbox.component';
import HeaderChatBox from '../HeaderChatbox/HeaderChatBox.component';
import './Chatbox.style.css';
import Message from '../Message/Message.component';
import {db} from '../../server/firebaseConfig';
import {useCollectionData} from 'react-firebase-hooks/firestore';

export default function Chatbox(props) {
	const {chat} = props;

	const messagesRef = db.collection(`chat/${chat}/messages`);
	const query = messagesRef.orderBy('createdAt');
	const [messages] = useCollectionData(query, { idField: 'id' });

	return (
		<div>
			<HeaderChatBox/>
			<Message messages={messages} />
			<TextFieldChatbox/>
		</div>
	);
}
