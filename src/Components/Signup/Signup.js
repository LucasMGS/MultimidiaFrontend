import React, { Fragment, useState } from 'react';
import Header from '../Header/Header';
import api from '../../services/backendAPI';
import './styles.css';


const Signup = () => {

    const [username, setUserName] = useState([]);
    const [password, setPassword] = useState([]);

    function SignupHandler(e) {
        e.preventDefault();

       
            const data = {
                username,
                password,
                role: 'usuario'
            }
            console.log(data);
            var response = api.post('/v1/Auth/register',data).then(
                (response) => {console.log(response)},
                (error) => {alert('Aconteceu algum erro ao tentar realizar o cadastro!')}
            );
            console.log(response);
            
       
    }

    return (
        <Fragment>
            <Header />
            <h1> Cadastrar </h1>
            <section>
                <div className="signup-container">
                    <form onSubmit={SignupHandler}>
                        <label>Nome de usuário: </label>
                        <input
                            type="text"
                            placeholder="Seu melhor nome de usuário"
                            value={username}
                            onChange={e => setUserName(e.target.value)}
                        /><br />
                        <label>Senha: </label>
                        <input
                            type="password"
                            placeholder="Sua melhor senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button className="button">Cadastrar</button>
                    </form>
                </div>
            </section>
           
        </Fragment>
    );
}

export default Signup;