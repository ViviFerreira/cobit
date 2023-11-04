import React, { useState } from 'react';

export const PointsContext = React.createContext({});

export const PointsProvider = (props) => {
	const [points, setPoints] = useState(0);

	const [correct, setCorrect] = useState('#e8e2e2');
	const [incorrect, setIncorrect] = useState('#e8e2e2');

	return (
		<PointsContext.Provider
			value={{
				points,
				correct,
				incorrect,
				setPoints,
				setCorrect,
				setIncorrect,
			}}
		>
			{props.children}
		</PointsContext.Provider>
	);
};

export const usePoints = () => React.useContext(PointsContext);
