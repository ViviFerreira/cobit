import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3001',
});

export const cadastrar = (values) => {
	api.post('/points', values);
};

export const buscar = async (url, setDado) => {
	const resp = await api.get(url);
	setDado(resp.data);
};

export const editar = (values, id) => {
	api.put(`/points/${id}`, values);
};
