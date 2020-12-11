import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
    return (
        <Fragment>
            <header className="banner">
                <div className="banner_content">
                    <Link className="link-multimidia" to="/">
                        <h3 > Multimidia</h3>
                    </Link>
                    <div className="account-container">
                        <Link className="link" to="/login">
                            <h3>  Entrar </h3>
                        </Link>
                        <Link className="link" to="/signup">
                            <h3> Criar uma conta </h3>
                        </Link>
                        <Link className="link" to="/uploadVideo">
                            <h3> upar video </h3>
                        </Link>
                    </div>
                </div>
                <hr></hr>
            </header>

        </Fragment>
    );
}

export default Header;