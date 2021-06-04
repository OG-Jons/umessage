import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";
import {firebase} from "./server/firebaseConfig";

function App() {
    const firebaseApp = firebase.apps[0];
    console.log(firebaseApp)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Button variant="contained" color="primary">Simple Button</Button>
                <code>
                    very nais
                </code>
            </header>
        </div>
    );
}

export default App;
