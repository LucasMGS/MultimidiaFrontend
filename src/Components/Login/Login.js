import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import api from "../../services/api";
import "./styles.css";

const Login = () => {
  const [username, setUserName] = useState([]);
  const [password, setPassword] = useState([]);
  let history = useHistory();

  async function LoginHandler(e) {
    e.preventDefault();

    try {
      const data = {
        username,
        password,
      };

      var response = await api.post("/v1/Auth/login", data);
      if (response.data.token != null) {
        localStorage.setItem("userToken", response.data.token);
        localStorage.setItem("username", response.data.username);
        history.push("/profile");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Fragment>
      <Header />
      <h1> Entrar </h1>
      <div className="main-container">
        <section>
          <div className="login-container">
            <form onSubmit={LoginHandler}>
              <label>Nome de usuário: </label>
              <input
                type="text"
                placeholder="Seu nome de usuário"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <br />

              <label>Senha: </label>
              <input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="signup">
                <label>Não tem uma conta?</label>
                <Link className="cadastrar-link" to="/signup">
                  Cadastrar
                </Link>
              </div>
              <button className="button">Entrar</button>
            </form>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Login;
