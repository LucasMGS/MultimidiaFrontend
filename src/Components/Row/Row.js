import React, { useEffect,useState } from 'react';
import api from '../../services/api';
import './styles.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, url, isLargeRow }) {

    const [movies,setMovies] = useState([]);
    useEffect(() => { 
        async function fetchData(){
            const response = await api.get(url);
            setMovies(response.data.results);
            return response;
        }
        fetchData();
    }, [url]);
    return (
        <>
            <div className="row">
                <h2> {title} </h2>
            </div>
            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </>
    );
}

export default Row;