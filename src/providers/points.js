import React, { useState, useEffect } from 'react';
import { buscar } from '../api';
import { useLogin } from '../Store/Provider';

export const PointsContext = React.createContext({});

export const PointsProvider = (props) => {
	const [dados, setDados] = useState({});
	const [points, setPoints] = useState(0);
	const [pointsQuestions, setPointsQuestions] = useState([]);
	const [modulosDesbloqueados, setModulosDesbloqueados] = useState([]);
	const [completeQuestions, setCompleteQuestions] = useState([]);
	const [loading, setLoading] = useState(true);
	const { idUsuario, setIdUsuario } = useLogin();

	function calcularTotalPontos() {
		let totalPontosInicial = 0;
		for (let i = 0; i < pointsQuestions.length; i++) {
			totalPontosInicial += pointsQuestions[i];
		}

		return totalPontosInicial;
	}
	useEffect(() => {
		var usuarioLogado = JSON.parse(localStorage.getItem('idUsuario'));
		if (usuarioLogado) {
			setIdUsuario(usuarioLogado.id);
		}
	}, []);

	useEffect(() => {
		async function fetchData() {
			try {
				if (idUsuario > 0) {
					const data = await buscar(`https://json-server-gamma-nine.vercel.app/points/${idUsuario}/`);
					setDados(data);
					setModulosDesbloqueados(data.unlockedModules);
					setCompleteQuestions(data.completeQuestions);
					setPointsQuestions(data.pointsQuestions);
					setLoading(false);
				}
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, [idUsuario]);

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
