import './App.css';
import MainHeader from './components/MainHeader/MainHeader.component'
import React, {useState} from 'react'
// import Sidebar from './components/Sidebar/Sidebar.component';
import Chatbox from './components/Chatbox/Chatbox.component';

function App() {
    const [clickHamburger, setClickHamburger] = useState(false);
    const [clickDarkmode, setClickDarkmode] = useState(false);

    const clickedHamburger = () => {
        setClickHamburger(!clickHamburger)
    }

    const clickedDarkmode = () => {
        setClickDarkmode(!clickDarkmode)
    }

    return (
        <div className="App">
            <MainHeader onClickHamburger={() => clickedHamburger()} 
            hamburger={clickHamburger} 
            onClickDarkmode={() => clickedDarkmode()}
            darkmode={clickDarkmode}
            />
            <Chatbox />
            {/*<Sidebar sideBar={clickHamburger}/>*/}
        </div>
    
    );
}

export default App;
