import TextFieldChatbox from '../TextfieldChatbox/TextFieldChatbox.component';
import HeaderChatBox from "../HeaderChatbox/HeaderChatBox.component";
import './Chatbox.style.css';

export default function Chatbox() {
    return (
        <div>
            <HeaderChatBox />
            <TextFieldChatbox />
        </div>
    )
}
