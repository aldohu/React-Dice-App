import logo from './logo.svg';
import './App.css';
import Dice from './Dice';
import { useState } from 'react';
function App() {
	const [roll, rollingDice] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [dice1, setDice1] = useState(1);
	const [dice2, setDice2] = useState(1);
	const rollDice = () => {
		if (disabled) return;
		if (!roll) {
			const newDice1 = Math.floor(Math.random() * 6) + 1;
			const newDice2 = Math.floor(Math.random() * 6) + 1;

			console.log('Rolling dice:', newDice1, newDice2); // Log the new values
			setDice1(newDice1);
			setDice2(newDice2);

			rollingDice(true);
			setDisabled(true);
			setTimeout(() => {
				rollingDice(false);
				setDisabled(false);
			}, 1000);
		}
	};
	return (
		<div className="App">
			<h1 className="App-title">Dice Game</h1>
			<div className="App-dice-container">
				<Dice
					value={dice1}
					roll={roll}
				/>
				<Dice
					value={dice2}
					roll={roll}
				/>
			</div>
			{!roll ? (
				<button
					className="App-button"
					onClick={rollDice}
					disabled={disabled} // Disable button during dice roll
				>
					Roll
				</button>
			) : (
				<button
					className="App-button"
					onClick={rollDice}
					disabled={disabled} // Disable button during dice roll
				>
					Rolling...
				</button>
			)}
		</div>
	);
}

export default App;
