import React, { Fragment } from 'react';
import Row from '../Row/Row';
import Header from '../Header/Header';
import video from './video.mp4';
import './styles.css';

function Home() {
    return (
        <Fragment>
            <Header />
            <div className="rows">
                <Row title="Terror" />
                <Row title="Comédia" />
            </div>
            <video height="350" autoPlay muted width="600" controls="controls">
                <source src={video} type="video/mp4" />
                <p>Desculpe, seu navegador não suporta</p>
            </video>
        </Fragment>

    );
}

export default Home;