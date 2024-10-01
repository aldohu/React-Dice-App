import React from 'react';
import './Dice.css';

const Dice = ({ value, roll }) => {
	console.log('Dice value:', value);
	console.log(roll);
	return (
		<div>
			<img
				className={`dice ${roll ? 'roll' : ''}`}
				src={`/images/${value}.webp`}
				alt={`${value}`}
				style={{ width: '100px', height: '100px' }}
			/>
		</div>
	);
};

export default Dice;
