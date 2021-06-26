import './App.css';
import MainHeader from './components/MainHeader/MainHeader.component';
import {useEffect, useState} from 'react';
import {getMessages} from "./server/Chat";


function App() {
    const [clickHamburger, setClickHamburger] = useState(false);
    const [clickDarkmode, setClickDarkmode] = useState(false);
    const [chats, setChats] = useState(null);

    useEffect(() => {
        getMessages().then(data => {
            setChats(data);
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
            <MainHeader onClickHamburger={() => clickedHamburger()}
                        hamburger={clickHamburger}
                        onClickDarkmode={() => clickedDarkmode()}
                        darkmode={clickDarkmode}
            />
        </div>
    );
}

export default App;
