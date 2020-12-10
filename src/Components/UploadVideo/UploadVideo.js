import React, { Fragment, useState } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';
import './styles.css';

function UploadVideo() {
    const [titulo, setTitulo] = useState([]);
    const [sinopse, setSinopse] = useState([]);
    const [thumbnail, setThumbnail] = useState([]);

    function UploadHandler(e) {
        e.preventDefault();

        try {
            const data = {
                titulo,
                sinopse,
                thumbnail,
            }

            api.post('uploadVideo',data);
            
            console.log(data);
        } catch (error) {
            alert('Aconteceu um erro ao fazer upload');
        }
    }

    return (
        <Fragment>
            <Header />
            <section>
                <form onSubmit={UploadHandler}>
                    <label>Titulo do video:</label>
                    <input
                        value={titulo}
                        type="text"
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <label>Sinopse:</label>

                    <input
                        type="text"
                        value={sinopse}
                        onChange={e => setSinopse(e.target.value)}
                    />
                    <label className="thumbnaily">Thumbnail:</label>

                    <input
                        className="file-container"
                        type="file"
                        value={thumbnail}
                        onChange={e => setThumbnail(e.target.value)}
                    />
                    {/* <source src="" className="file-container" type="file" type="video/mp4"/> */}
                    <button className="button">Fazer upload</button>
                </form>
            </section>
        </Fragment>
    );

}

export default UploadVideo;