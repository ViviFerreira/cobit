import { createContext, useState, useContext, useEffect } from 'react';
import { buscar } from '../api';

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
	const [id, setId] = useState();
	const [alldados, setAllDados] = useState([]);

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
	}, []);

	return (
		<LoginContext.Provider
			value={{
				id,
				setId,
				alldados,
				setAllDados,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
};

export const useLogin = () => useContext(LoginContext);
