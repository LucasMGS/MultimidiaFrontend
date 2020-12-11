import React, { Fragment } from 'react';
import Row from '../Row/Row';
import Header from '../Header/Header';
import requests from '../../services/requests';
import Banner from '../Banner/Banner';
import Nav from '../NavMenu/NavMenu';
// import video from './video.mp4';
import './styles.css';

function Home() {
    
    return (
        <Fragment>
            {/* <Header /> */}
            <Nav />
            <Banner />
            <div className="rows">
                <Row title="ORIGINAIS NETFLIX" url={requests.fetchNetflixOriginals} isLargeRow/>
                <Row title="Tendências agora" url={requests.fetchTrending}/>
                <Row title="Melhores avaliados" url={requests.fetchTopRated}/>
                <Row title="Filmes de ação" url={requests.fetchActionMovies}/>
                <Row title="Filmes de comédia" url={requests.fetchComedyMovies}/>
                <Row title="Filmes de terror" url={requests.fetchHorrorMovies}/>
                <Row title="Filmes de romance" url={requests.fetchRomanceMovies}/>
                <Row title="Documentários" url={requests.fetchDocumentaries}/>
            </div>
            
            {/* <video height="350" autoPlay muted width="600" controls="controls">
                <source src={video} type="video/mp4" />
                <p>Desculpe, seu navegador não suporta</p>
            </video> */}
        </Fragment>

    );
}

export default Home;