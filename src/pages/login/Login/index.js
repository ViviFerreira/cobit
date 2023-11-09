import { useContext, useState,StoreContext, useHistory } from 'react';
import React from 'react';
import Layout from '../../../components/Layout';
import './styles.css';
import { Link } from 'react-router-dom';


function initialState() {
    return { user: '', password: '' };
}

function login({ user, password }) {
    if (user === 'admin' && password === 'admin') {
      return { token: '1234' };
    }
    return { error: 'Usuário ou senha inválido' };
}

function Login() {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
        ...values,
        [name]: value
        });
    }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/');
    }

    setError(error);
    setValues(initialState);
  }

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
                            <input type="email"  placeholder="Email" onChange={onChange} value={values.user}/>
                            <input type="password"  placeholder="Senha" onChange={onChange} value={values.password}/>
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
