import React, { Fragment } from 'react';
import Row from '../Row/Row';
import Header from '../Header/Header';
import './styles.css';

function Home() {
    return (
        <Fragment>
            <Header />
            <Row title="TESTE" />
            <Row title="TESTE2" />
        </Fragment>
    );
}


export default Home;