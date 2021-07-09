import './App.css';
import MainHeader from './components/MainHeader/MainHeader.component';
import {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "./server/firebaseConfig";
import {getChatsFromUID, getGlobalMessages, getMessages} from './server/Chat';
import SignInComponent from "./components/Authentication/SignIn.component";

function App() {
	const [user] = useAuthState(auth);
	const [clickHamburger, setClickHamburger] = useState(false);
    const [clickDarkmode, setClickDarkmode] = useState(false);
    const [chats, setChats] = useState(null);
    const [globalChat, setGlobalChat] = useState(null);

    useEffect(() => {
        getMessages().then(data => {
            setChats(data);
        });

        getGlobalMessages().then(data => {
            setGlobalChat(data);
        });

    }, []);


    const clickedHamburger = () => {
        setClickHamburger(!clickHamburger);
    };
    useEffect(() => {
        getChatsFromUID("Kp3MBM36cwfv6S5IXMYAC90osjK2")
        .then(data => {
            console.log(data.toString());
            // console.log(data.getMessageCollection());
            // data.sendMessage("testMessage");
        })
    }, [])

    const clickedDarkmode = () => {
        setClickDarkmode(!clickDarkmode);
    };

    return (
        <div className="App">
            {
                user ? <MainHeader onClickHamburger={() => clickedHamburger()}
                                   hamburger={clickHamburger}
                                   onClickDarkmode={() => clickedDarkmode()}
                                   darkmode={clickDarkmode}
                /> : <SignInComponent />
            }
        </div>
    );
}

export default App;
