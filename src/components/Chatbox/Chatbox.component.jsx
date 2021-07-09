import TextFieldChatbox from '../TextfieldChatbox/TextFieldChatbox.component';
import HeaderChatBox from '../HeaderChatbox/HeaderChatBox.component';
import './Chatbox.style.css';
import Message from '../Message/Message.component';
import {db} from '../../server/firebaseConfig';
import {useCollectionData} from 'react-firebase-hooks/firestore';

export default function Chatbox(props) {
	const data = [{
		id: 1,
		message: 'hey',
		name: 'Fabian'
	},
	{
		id: 2,
		message: 'Fabian isch en spasst',
		name: 'Nick'
	},{
		id: 2,
		message: 'Fabian isch en spasst',
		name: 'Nick'
	},{
		id: 2,
		message: 'Fabian isch en spasst',
		name: 'Nick'
	},{
		id: 2,
		message: 'Fabian isch en spasst',
		name: 'Nick'
	},{
		id: 2,
		message: 'Fabian isch en spasst',
		name: 'Nick'
	},{
		id: 2,
		message: 'Fabian isch en spasst',
		name: 'Nick'
	},{
		id: 2,
		message: 'Fabian isch en spasst',
		name: 'Nick'
	},{
		id: 2,
		message: 'Fabian isch en spasst',
		name: 'Nick'
	},{
		id: 2,
		message: 'Fabian isch en spasst',
		name: 'Nick'
	},{
		id: 2,
		message: ' Fabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasstFabian isch en spasst',
		name: 'Nick'
	},
	];

	const messagesRef = db.collection('messages').document(props.chat).collection('messages');
	const query = messagesRef.orderBy('createdAt');
	const [messages] = useCollectionData(query, { idField: 'id' });
	console.log(messages);

	return (
		<div>
			<HeaderChatBox/>
			<Message messages={data} />
			<TextFieldChatbox/>
		</div>
	);
}
