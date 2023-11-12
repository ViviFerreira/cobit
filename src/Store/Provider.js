import { createContext, useState, useContext, useEffect } from 'react';
import { buscar } from '../api';

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
	const [alldados, setAllDados] = useState([]);
	const [idUsuario, setIdUsuario] = useState(0);
	const [novaBusca, setNovaBusca] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const data = await buscar('http://127.0.0.1:5000/points/');
				setAllDados(data);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, [novaBusca, setNovaBusca]);

	return (
		<LoginContext.Provider
			value={{
				alldados,
				setAllDados,
				idUsuario,
				setIdUsuario,
				setNovaBusca,
				loading,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
};

export const useLogin = () => useContext(LoginContext);
