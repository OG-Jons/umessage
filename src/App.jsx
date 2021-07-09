import './App.css';
import { useState } from 'react';
import Main from './components/Main/Main.component';

function App() {
	const [clickHamburger, setClickHamburger] = useState(false);
	const [clickDarkmode, setClickDarkmode] = useState(false);

	const clickedHamburger = () => {
		setClickHamburger(!clickHamburger);
	};

	const clickedDarkmode = () => {
		setClickDarkmode(!clickDarkmode);
	};

	return (
		<div className="App">
			<Main
				onClickHamburger={() => clickedHamburger()}
				hamburger={clickHamburger}
				onClickDarkmode={() => clickedDarkmode()}
				darkmode={clickDarkmode}
			/>
		</div>
	);
}

export default App;
