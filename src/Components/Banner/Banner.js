import React, { useState, useEffect } from 'react';
import api from '../../services/moviesAPI';
import requests from '../../services/requests';
import './styles.css';

// arquivo de cabeçalho da primeira página (home)
function Banner() {
  const [movie, setMovie] = useState([]);

//React hook do react, que executa a função criada (fetchData) toda vez que carrega o site.
//neste caso o papel é obter os dados assíncronos da API de filmes
  useEffect(() => {
    async function fetchData() {
      const response = await api.get(requests.fetchNetflixOriginals);
      var randomIndex = Math.floor(Math.random() * response.data.results.length - 1);

      setMovie(response.data.results[randomIndex]);
      return response;
    }
    fetchData();
  }, []);

  //função para deixar a sinopse com "..." quando passar de N caracteres
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
    {/* cabeçalho contendo as imagens do filmes*/}
      <header className="banner" style={{
        backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}>
        <div className="banner__contents">
          <h1 className="banner__title">
            {/* conteudo do cabeçalho mostrando o titulo do filme */}
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          {/* os 2 botoes do "play" e "my list" do cabeçalho */}
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          
          {/* sinopse do filme utilizando a funcao truncate caso passar de 150 caracteres */}
          <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
          {/* </div> */}
        </div>
        {/* uma tentativa de deixar um efeito de fade no final do banner D: */}
      <div className="banner__fadeBottom"> </div>
      </header>
    </>
  );

}
export default Banner;