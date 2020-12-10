import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
    return (
        <Fragment>
            <header className="banner">
                <div className="banner_content">
                    <Link className="link-multimidia" to="/">
                        <h3 className="header-link"> Multimidia</h3>
                    </Link>
                    <div className="account-container">
                        <Link className="link" to="/login">
                            <h3 className="header-link"> Entrar </h3>
                        </Link>
                        <Link className="link" to="/signup">
                            <h3 className="header-link"> Criar uma conta </h3>
                        </Link>
                        <Link className="link" to="/uploadVideo">
                            <h3 className="header-link"> upar video </h3>
                        </Link>
                    </div>
                </div>
                <hr />
            </header>

        </Fragment>
    );
}

export default Header;