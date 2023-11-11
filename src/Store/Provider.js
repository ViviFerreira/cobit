import { createContext, useState, useContext, useEffect } from 'react';
import { buscar } from '../api';

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
	const [alldados, setAllDados] = useState([]);
	const [idUsuario, setIdUsuario] = useState(0);
	const [novaBusca, setNovaBusca] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await buscar('http://127.0.0.1:3001/points/');
				setAllDados(data);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, [novaBusca]);

	return (
		<LoginContext.Provider
			value={{
				alldados,
				setAllDados,
				idUsuario,
				setIdUsuario,
				setNovaBusca,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
};

export const useLogin = () => useContext(LoginContext);
