import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './styles.css';

const Login = () => {
    return (
        <Fragment>
            <Header />
            <h1> Entrar </h1>
            <div className="main-container">
            
            <section>
                <div className="login-container">
                    <form>
                        <label>Nome de usuário: </label>
                        <input type="text" placeholder="Seu melhor nome de usuário" /><br />
                        <label>Senha: </label>
                        <input type="password" placeholder="Sua melhor senha" />
                        <div className="signup">
                            <label>Não tem uma conta?</label>
                            <Link to="/signup">Cadastrar</Link>
                        </div>
                        <button className="button">Entrar</button>

                    </form>

                </div>
            </section>
            </div>
        </Fragment>
    );
}

export default Login;