import React, {Fragment} from 'react';
import Header from '../Header/Header';
import Row from '../Row/Row';
import './styles.css';

function Profile() {
    return (
        <Fragment>
            <Header />
            <h2> Seus vídeos</h2>
            <Row title="Comedia" />
        </Fragment>
    );
}

export default Profile;