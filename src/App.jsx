import './App.css';
import { Button } from "@material-ui/core";
import { chatConverter, getChatsFromUID } from "./common/Chat";
import { db } from "./server/firebaseConfig";
import { messageConverter } from "./common/Message";



function App() {
    const [clickHamburger, setClickHamburger] = useState(false);
    const [clickDarkmode, setClickDarkmode] = useState(false);

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
            <MainHeader onClickHamburger={() => clickedHamburger()} 
            hamburger={clickHamburger} 
            onClickDarkmode={() => clickedDarkmode()}
            darkmode={clickDarkmode}
            />
        </div>
    
    );
}

export default App;
