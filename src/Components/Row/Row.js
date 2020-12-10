import React from 'react';
import './styles.css';

function Row(props) {

    return (
        <>
            <div className="row">
                <h2> {props.title} </h2>

            </div>
            <div className="row__posters">
                <div>
                    <img className="row__poster" src="https://upload.wikimedia.org/wikipedia/en/3/38/The_SpongeBob_Movie_Sponge_on_the_Run.jpg" alt="teste"></img>
                    <p>Filme do bob esponja</p>
                </div>
                <div>
                    <img className="row__poster" src="https://upload.wikimedia.org/wikipedia/en/3/38/The_SpongeBob_Movie_Sponge_on_the_Run.jpg" alt="teste"></img>
                    <p>Filme do bob esponja</p>
                </div>
            </div>
        </>
    );
}

export default Row;