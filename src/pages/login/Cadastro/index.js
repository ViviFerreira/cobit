import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from 'react-router-dom';
import './styles.css';

function Cadastro() {
	return (
		<Layout>
           <div className='contentLogin'>
                <form className='backgroundLogin'>       
                    <div className='titleLogin'>
                        <h2>Cadastro</h2>
                    </div>
                    <div className='inputsBtnLogin'>
                        <div className='inputs'>
                            <div className='inputsEmpSet'>
                                <input className="empresa" type="text"  placeholder="Nome da empresa"/>
                                <input className="setor" type="text"  placeholder="Nome do setor"/>
                            </div>
                            <input type="text"  placeholder="Usuário"/>
                            <input type="email"  placeholder="Email"/>
                            <input type="password"  placeholder="Senha"/>
                        </div>
                        <div>
                            <span className='textRegister'>Ja tem cadastro? <Link to="/"> faça o login</Link></span>
                        </div>
                    </div>
                        <div className='btnLogin'>
                            <input className="btnLoginHover" type='submit' ></input>
                        </div>
                </form>
            </div>
		</Layout>
	);
}
export default Cadastro;
