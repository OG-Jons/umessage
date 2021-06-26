import TextFieldChatbox from '../TextfieldChatbox/TextFieldChatbox.component'
import HeaderChatBox from '../HeaderChatbox/HeaderChatBox.component'
import './Chatbox.style.css'
import Message from '../Message/Message.component'

export default function Chatbox() {
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
    ]

    return (
        <div>
            <HeaderChatBox/>
            <Message messages={data} />
            <TextFieldChatbox/>
        </div>
    )
}
