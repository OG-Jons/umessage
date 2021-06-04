import logo from './logo.svg';
import './App.css';
import {firebase} from "./firebaseConfig";

function App() {
    const firebaseApp = firebase.apps[0];
    console.log(firebaseApp)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <code>
                    very nais
                </code>
            </header>
        </div>
    );
}

export default App;
