import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://127.0.0.1:3001',
});

export const cadastrar = async (values) => {
	try {
		await api.post('/points', values);
		return 200;
	} catch (error) {
		return 400;
	}
};

export const buscar = async (url) => {
	try {
		const resp = await api.get(url);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
};

export const editar = (values, id) => {
	api.put(`/points/${id}`, values);
};
