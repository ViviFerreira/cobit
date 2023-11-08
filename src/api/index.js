import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://127.0.0.1:3001',
});

export const cadastrar = (values) => {
	api.post('/points', values);
};

export const buscar = async (url) => {
	try {
		const resp = await api.get(url);
		return(resp.data);
	} catch (error) {
        console.log(error)
    }
};

export const editar = (values, id) => {
	api.put(`/points/${id}`, values);
};
