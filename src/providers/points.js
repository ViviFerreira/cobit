import React, { useState, useEffect } from 'react';
import { buscar } from '../api';

export const PointsContext = React.createContext({});

export const PointsProvider = (props) => {
	const [dados, setDados] = useState({});
	const [points, setPoints] = useState(0);
	const [pointsQuestions, setPointsQuestions] = useState([]);
	const [modulosDesbloqueados, setModulosDesbloqueados] = useState([]);
	const [completeQuestions, setCompleteQuestions] = useState([]);
	const [loading, setLoading] = useState(true);

	function calcularTotalPontos() {
		let totalPontosInicial = 0;
		for (let i = 0; i < pointsQuestions.length; i++) {
			totalPontosInicial += pointsQuestions[i];
		}

		return totalPontosInicial;
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await buscar('http://127.0.0.1:3001/points/1/');

				setDados(data);
				setModulosDesbloqueados(data.unlockedModules);
				setCompleteQuestions(data.completeQuestions);
				setPointsQuestions(data.pointsQuestions);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		if (loading == false) {
			setPoints(calcularTotalPontos());
		}
	}, [loading]);

	return (
		<PointsContext.Provider
			value={{
				points,
				setPoints,
				completeQuestions,
				setCompleteQuestions,
				modulosDesbloqueados,
				setModulosDesbloqueados,
				pointsQuestions,
				setPointsQuestions,
				dados,
				setDados,
				loading,
			}}
		>
			{props.children}
		</PointsContext.Provider>
	);
};

export const useAplication = () => React.useContext(PointsContext);
