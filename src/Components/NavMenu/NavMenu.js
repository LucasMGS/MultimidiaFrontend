import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function NavMenu() {
  return (
    <>
      <div className="nav">
        <Link className="link link-multimidia" to="/">
          <h3>MULTIFLIX</h3>
        </Link>
        <div className="account-container">
          <Link className="link" to="/login">
            <h3>Entrar</h3>
          </Link>
          <Link className="link" to="/signup">
            <h3>Cadastrar</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
