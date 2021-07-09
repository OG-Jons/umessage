import './App.css';
import MainHeader from './components/MainHeader/MainHeader.component';
import {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, db} from "./server/firebaseConfig";
import {getChatsFromUID, getGlobalMessages, getMessages} from './server/Chat';
import SignInComponent from "./components/Authentication/SignIn.component";
import {useCollectionData} from "react-firebase-hooks/firestore";

function App() {
    const [user] = useAuthState(auth);
    const [clickHamburger, setClickHamburger] = useState(false);
    const [clickDarkmode, setClickDarkmode] = useState(false);
    const [chats, setChats] = useState(null);
    const [globalChat, setGlobalChat] = useState(null);
    const [test, setTest] = useState(null);
    const [gc, setGc] = useState(null);

    if (user && !gc) {
        getChatsFromUID(user.uid)
            .then(data => {
                setTest(data);
            })
        setGc('a');
    }

    if (test) {
        console.log(test)
        const [chats] = useCollectionData(test, { idField: 'id' });
        console.log(chats)
    }

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

    const clickedDarkmode = () => {
        setClickDarkmode(!clickDarkmode);
    };

    return (
        <div className="App">
            {
                user ? <>
                        <MainHeader onClickHamburger={() => clickedHamburger()}
                                    hamburger={clickHamburger}
                                    onClickDarkmode={() => clickedDarkmode()}
                                    darkmode={clickDarkmode}/>
                    </>
                    : <SignInComponent/>
            }
        </div>
    );
}

export default App;
