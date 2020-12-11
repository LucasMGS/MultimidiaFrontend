import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import requests from '../../services/requests';
import './styles.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(requests.fetchNetflixOriginals);
      var randomIndex = Math.floor(Math.random() * response.data.results.length - 1);

      setMovie(response.data.results[randomIndex]);
      return response;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <header className="banner" style={{
        backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}>
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          {/* <div className="description__container"> */}
          <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
          {/* </div> */}
        </div>
      <div className="banner__fadeBottom"> </div>
      </header>
    </>
  );

}
export default Banner;