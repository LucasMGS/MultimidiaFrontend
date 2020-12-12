import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  const username = localStorage.getItem("username");
  var isLoggedIn = username != null;

  function LogOut() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
  }
  return (
    <Fragment>
      <header>
        <div className="banner_content">
          <Link className="link-multimidia" to="/">
            <h3> MULTIFLIX </h3>
          </Link>
          <h3 className="welcome" style={{ visibility: `${isLoggedIn ? "visibility" : "hidden"}` }}>
            Seja bem-vindo, {username}
          </h3>
          <div
            className="account-container"
            style={{ width: `${isLoggedIn ? "320" : "250"}` }}
          >
            {!isLoggedIn ? (
              <Link className="link" to="/signup">
                <h3> Criar uma conta </h3>
              </Link>
            ) : (
              <Link className="link" to="/profile">
                <h3> Perfil </h3>
              </Link>
            )}
            {isLoggedIn ? (
              <Link className="link" to="/uploadVideo">
                <h3> Upar video </h3>
              </Link>
            ) : (
              <div></div>
            )}
            {isLoggedIn ? (
              <Link className="link" to="/" onClick={LogOut}>
                <h3> Sair </h3>
              </Link>
            ) : (
              <Link className="link" to="/login">
                <h3>Entrar</h3>
              </Link>
            )}
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
