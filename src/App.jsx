import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@material-ui/core";
import { chatConverter, getChatsFromUID } from "./common/Chat";
import { db } from "./server/firebaseConfig";
import { messageConverter } from "./common/Message";



function App() {
    const [test, setTest] = useState(null);

    useEffect(() => {
        getChatsFromUID("Kp3MBM36cwfv6S5IXMYAC90osjK2")
        .then(data => {
            console.log(data.toString());
            // console.log(data.getMessageCollection());
            // data.sendMessage("testMessage");
        })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Button variant="contained" color="primary">Simple Button</Button>
                <code>
                    {test &&
                        JSON.stringify(test)
                    }
                </code>
            </header>
        </div>
    );
}

export default App;
