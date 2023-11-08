import React from 'react';
import Layout from '../../../components/Layout';
import './styles.css';
import { Link } from 'react-router-dom';



function Login() {
	return (
		<Layout>
           <div className='contentLogin'>
                <form className='backgroundLogin'>       
                    <div className='titleLogin'>
                        <h2>Login</h2>
                    </div>
                    <div className='inputsBtnLogin'>
                        <div className='inputs'>
                            <input className="setor" type="text"  placeholder="Nome do setor"/>
                            <input type="email"  placeholder="Email" />
                            <input type="password"  placeholder="Senha" />
                        </div>
                    </div>
                    <div>
                        <span className='textRegister'>Ainda não tem registro? <Link to="/Cadastro"> se cadastrar</Link></span>
                    </div>
                        <div className='btnLogin'>
                            <input className="btnLoginHover" type='submit'></input>
                        </div>
                </form>
            </div>
		</Layout>
	);
}
export default Login;
