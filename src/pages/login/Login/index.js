import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../../Store/Provider';
import { useLogin } from '../../../Store/Provider';
import Layout from '../../../components/Layout';
import './styles.css';
import { Link } from 'react-router-dom';

function initialState() {
	return { user: '', password: '' };
}

function Login() {
	const [values, setValues] = useState(initialState);
	const [error, setError] = useState(null);
	const { setToken } = useContext(LoginContext);
	const { alldados, setId } = useLogin();
	const navigate = useNavigate();

	function processarLogin({ user, password }) {
		console.log(alldados)
		if (alldados > 0) {
			
			const currentUser = alldados.filter(
				(usuario) => usuario.usuario === user && usuario.senha === password
			);
			if (currentUser.length > 0) {
				return { token: true };
			}
			setId(currentUser.id);
			return { error: 'Usuário ou senha inválido' };
		}
	}

	function onChange(event) {
		const { value, name } = event.target;

		setValues({
			...values,
			[name]: value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();

		const { token, error } = processarLogin(values);
		console.log(token, error);

		if (token) {
			navigate('/Mapa');
		}

		setError(error);
		setValues(initialState);
	}

	return (
		<Layout>
			<div className='contentLogin'>
				<form className='backgroundLogin' onSubmit={handleSubmit}>
					<div className='titleLogin'>
						<h2>Login</h2>
					</div>
					<div className='inputsBtnLogin'>
						<div className='inputs'>
							{/* <input className='setor' type='text' placeholder='Nome do setor' /> */}
							<input
								type='text'
								name='user'
								placeholder='Usuário'
								onChange={onChange}
								value={values.S}
							/>
							<input
								type='password'
								name='password'
								placeholder='Senha'
								onChange={onChange}
								value={values.password}
							/>
						</div>
					</div>
					<span className='textRegisterLogin'>
						Ainda não tem registro? <Link to='/Cadastro'> se cadastrar</Link>
					</span>
					<div className='btnLogin'>
						<input className='btnLoginHover' type='submit' />
					</div>
				</form>
			</div>
		</Layout>
	);
}
export default Login;
