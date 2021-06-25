import TextFieldChatbox from '../TextfieldChatbox/TextFieldChatbox.component';
import HeaderChatBox from "../HeaderChatbox/HeaderChatBox.component";
import './Chatbox.style.css';
import Message from '../Message/Message.component'

export default function Chatbox() {
    return (
        <div>
            <HeaderChatBox />
            <Message />
            <TextFieldChatbox />
        </div>
    )
}
