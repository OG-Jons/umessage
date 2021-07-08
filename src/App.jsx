import './App.css';
import MainHeader from './components/MainHeader/MainHeader.component'
import {useState} from 'react';
import SignIn from "./components/Authentication/SignIn.component";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "./server/firebaseConfig";
import GlobalChat from "./server/GlobalChat";

function App() {
    const [clickHamburger, setClickHamburger] = useState(false);
    const [clickDarkmode, setClickDarkmode] = useState(false);

    const clickedHamburger = () => {
        setClickHamburger(!clickHamburger)
    }

    const clickedDarkmode = () => {
        setClickDarkmode(!clickDarkmode)
    }

    const [user] = useAuthState(auth);

    return (
        <div className="App">
            {
                user ? <MainHeader onClickHamburger={() => clickedHamburger()}
                                   hamburger={clickHamburger}
                                   onClickDarkmode={() => clickedDarkmode()}
                                   darkmode={clickDarkmode}
                /> : <SignIn />
            }
        </div>
    );
}

export default App;
