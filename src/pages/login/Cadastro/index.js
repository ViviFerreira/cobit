import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { Link } from 'react-router-dom';
import './styles.css';
import { cadastrar } from '../../../api';

function Cadastro() {
	const [showAlert, setShowAlert] = useState(false);

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

	const handleSubmit = (e) => {
		e.preventDefault();
		cadastrar(form);

		setForm({
			empresa: '',
			setor: '',
			usuario: '',
			email: '',
			senha: '',
		});
		setShowAlert(true);

		setTimeout(() => {
			setShowAlert(false);
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
						<input className='btnLoginHover' type='submit'></input>
					</div>
				</form>
				{showAlert && <div className='alert-sucess'>Cadastrado com sucesso</div>}
			</div>
		</Layout>
	);
}
export default Cadastro;
