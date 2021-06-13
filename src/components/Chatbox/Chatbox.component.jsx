import TextFieldChatbox from '../TextfieldChatbox/TextFieldChatbox.component';
import './Chatbox.style.css';

function Chatbox() {
    return (
        <div className="main-chatbox">
            {/*<HeaderChatBox />*/}
            <TextFieldChatbox />
        </div>
    )
}

export default Chatbox;
