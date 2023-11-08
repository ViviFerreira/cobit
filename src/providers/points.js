import React, { useState } from 'react';

export const PointsContext = React.createContext({});

export const PointsProvider = (props) => {
	const [points, setPoints] = useState(0);
	const [modulosDesbloqueados, setModulosDesbloqueados] = useState([
		true,
		false,
		false,
		false,
		false,
	]);
	const [completeQuestions, setCompleteQuestions] = useState([
		false,
		false,
		false,
		false,
		false,
	]);

	return (
		<PointsContext.Provider
			value={{
				points,
				setPoints,
				completeQuestions,
				setCompleteQuestions,
				modulosDesbloqueados,
				setModulosDesbloqueados,
			}}
		>
			{props.children}
		</PointsContext.Provider>
	);
};

export const useAplication = () => React.useContext(PointsContext);
