import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../Store/Provider';
import Layout from '../../../components/Layout';
import './styles.css';
import { Link } from 'react-router-dom';

function initialState() {
	return { user: '', password: '' };
}

function Login() {
	const [values, setValues] = useState(initialState);
	const [error, setError] = useState(false);
	const { alldados, setIdUsuario } = useLogin();
	const navigate = useNavigate();

	function processarLogin({ user, password }) {
		if (alldados.length > 0) {
			const currentUser = alldados.find(
				(usuario) => usuario.usuario === user && usuario.senha === password
			);
			if (currentUser) {
				let idUsuario = { id: currentUser.id };
				//Salvar usuário
				localStorage.setItem('idUsuario', JSON.stringify(idUsuario));
				//Adiciona no estado local
				var usuarioLogado = JSON.parse(localStorage.getItem('idUsuario'));
				if (usuarioLogado) {
					setIdUsuario(usuarioLogado.id);
				}

				return true;
			}
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
		if (processarLogin(values)) {
			navigate('/Mapa');
		} else {
			setError(true);
		}

		setValues(initialState);

		setTimeout(() => {
			setError(false);
		}, 5000);
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
						Ainda não tem registro? <Link to='/Cadastro'> Se cadastre</Link>
					</span>
					<div className='btnLogin'>
						<input className='btnLoginHover' type='submit' value='Logar' />
					</div>
				</form>
				{error && <div className='alert-error'>Usuário inválido</div>}
			</div>
		</Layout>
	);
}
export default Login;
