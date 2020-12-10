import React, { Fragment } from 'react';
import Header from '../Header/Header';
import './styles.css';


const Signup = () => {
    return (
        <Fragment>
            <Header />
            <h1> Cadastrar </h1>
            <section>
                <div className="signup-container">
                    <form>
                        <label>Nome de usuário: </label>
                        <input type="text" placeholder="Seu melhor nome de usuário"/><br />
                        <label>Senha: </label>
                        <input type="password"  placeholder="Sua melhor senha"/>
                        <button className="button">Entrar</button>
                    </form>
                </div>
            </section>
        </Fragment>
    );
}

export default Signup;