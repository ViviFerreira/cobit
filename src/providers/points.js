import React, { useState } from 'react';

export const PointsContext = React.createContext({});

export const PointsProvider = (props) => {
	const [points, setPoints] = useState(0);

	return (
		<PointsContext.Provider
			value={{
				points,
				setPoints,
			}}
		>
			{props.children}
		</PointsContext.Provider>
	);
};

export const usePoints = () => React.useContext(PointsContext);
