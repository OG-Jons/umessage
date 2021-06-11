import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";
import {firebase} from "./server/firebaseConfig";
//import Sidebar from './components/Sidebar/sidebar'
import MainHeader from './components/MainHeader/mainHeader'
import React, {useState} from 'react'
import { SettingsCellTwoTone } from '@material-ui/icons';
import Sidebar from './components/Sidebar/sidebar';

function App() {
    const firebaseApp = firebase.apps[0];
    console.log(firebaseApp)
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
            <Sidebar sideBar={clickHamburger}/>
        </div>
    
    );
}

export default App;
