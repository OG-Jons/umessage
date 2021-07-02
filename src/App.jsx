import './App.css';
import MainHeader from './components/MainHeader/MainHeader.component';
import {useState, useEffect} from 'react';
import { chatConverter, getChatsFromUID } from "./common/Chat";




function App() {
    const [clickHamburger, setClickHamburger] = useState(false);
    const [clickDarkmode, setClickDarkmode] = useState(false);
    
    const [test, setTest] = useState(null);
    useEffect(() => {
        getChatsFromUID("Kp3MBM36cwfv6S5IXMYAC90osjK2")
        .then(data => {
            console.log(data.toString());
            // console.log(data.getMessageCollection());
            // data.sendMessage("testMessage");
            setTest(data.toString())
        })
    }, [])

    const clickedHamburger = () => {
        setClickHamburger(!clickHamburger)
    }

    const clickedDarkmode = () => {
        setClickDarkmode(!clickDarkmode)
    }

    return (
      <div className="App">
        <code>{test && JSON.stringify(test)}</code>
        {/* <MainHeader onClickHamburger={() => clickedHamburger()} 
            hamburger={clickHamburger} 
            onClickDarkmode={() => clickedDarkmode()}
            darkmode={clickDarkmode}
            /> */}
      </div>
    );
}

export default App;
