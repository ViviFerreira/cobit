import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { Link } from 'react-router-dom';
import './styles.css';
import { cadastrar } from '../../../api';
import { useLogin } from '../../../Store/Provider';

function Cadastro() {
	const [error, setError] = useState(false);
	const [showMsg, setShowMsg] = useState(false);
	const { alldados, setNovaBusca } = useLogin();

	const [form, setForm] = useState({
		empresa: '',
		setor: '',
		usuario: '',
		email: '',
		senha: '',
		pointsQuestions: [0, 0, 0, 0, 0],
		unlockedModules: [true, false, false, false, false],
		completeQuestions: [false, false, false, false, false],
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	function validarCadastro({ usuario }) {
		if (alldados.length > 0) {
			const currentUser = alldados.find((user) => user.usuario == usuario);
			console.log(currentUser);
			if (currentUser) {
				return false;
			} else {
				return true;
			}
		} else {
			return true;
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validarCadastro(form)) {
			cadastrar(form);
			setNovaBusca(true);
			setShowMsg(true);
		} else {
			setError(true);
		}

		setForm({
			...form,
			empresa: '',
			setor: '',
			usuario: '',
			email: '',
			senha: '',
		});

		setTimeout(() => {
			setShowMsg(false);
			setError(false);
		}, 5000);
	};

	return (
		<Layout>
			<div className='contentLogin'>
				<form className='backgroundLogin' onSubmit={handleSubmit}>
					<div className='titleLogin'>
						<h2>Cadastro</h2>
					</div>
					<div className='inputsBtnLogin'>
						<div className='inputs'>
							<div className='inputsEmpSet'>
								<input
									className='empresa'
									type='text'
									name='empresa'
									value={form.empresa}
									placeholder='Nome da empresa'
									onChange={handleChange}
								/>
								<input
									className='setor'
									type='text'
									name='setor'
									value={form.setor}
									placeholder='Nome do setor'
									onChange={handleChange}
								/>
							</div>
							<input
								type='text'
								name='usuario'
								value={form.usuario}
								placeholder='Usuário'
								onChange={handleChange}
							/>
							<input
								type='email'
								name='email'
								value={form.email}
								placeholder='Email'
								onChange={handleChange}
							/>
							<input
								type='password'
								name='senha'
								value={form.senha}
								placeholder='Senha'
								onChange={handleChange}
							/>
						</div>

						<span className='textRegister'>
							Ja tem cadastro? <Link to='/'> Faça o login</Link>
						</span>
					</div>
					<div className='btnLogin'>
						<input className='btnLoginHover' type='submit' value='Cadastrar'></input>
					</div>
				</form>
				{error && <div className='alert-error'>Erro! Esse usuário já existe</div>}
				{showMsg && (
					<div className='alert-success'>Usuário cadastrado com sucesso</div>
				)}
			</div>
		</Layout>
	);
}
export default Cadastro;
