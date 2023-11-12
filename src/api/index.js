import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3001',
});

export const cadastrar = async (values) => {
	try {
		const response = await api.post('/points', values, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return response.status; // Retorna o status da resposta HTTP
	} catch (error) {
		console.error('Erro ao cadastrar:', error);
		return 400; // Ou algum código de erro apropriado
	}
};

export const buscar = async (url) => {
	try {
		const resp = await api.get(url);
		return resp.data;
	} catch (error) {
		console.error('Erro ao buscar dados:', error);
		throw error; // Rejeita a promise para indicar um erro ao chamador
	}
};

export const editar = async (values, id) => {
	try {
		const response = await api.put(`/points/${id}`, values, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return response.status; // Retorna o status da resposta HTTP
	} catch (error) {
		console.error('Erro ao editar:', error);
		return 400; // Ou algum código de erro apropriado
	}
};
