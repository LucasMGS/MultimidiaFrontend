import React, { Fragment, useState, Component } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';
import './styles.css';

function UploadVideo() {

    const [titulo, setTitulo] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [video, setVideo] = useState({});
    const [videoPrev, setVideoPrev] = useState({});
    const [thumbnail, setThumbnail] = useState({});
    const [thumbPreview, setThumbPreview] = useState([]);

    function convertToBase64(e) {
        var reader = new FileReader();
        reader.onload = function () {
            var arrayBuffer = e,
                array = new Uint8Array(arrayBuffer),
                binaryString = String.fromCharCode.apply(null, array);

            debugger;
        }
        reader.readAsArrayBuffer(e);
    }

    function onFormSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('Nome', titulo);
        formData.append('Sinopse', sinopse,);
        formData.append('ContentTypeVideo', 'video/mp4',);
        formData.append('ContentTypeImagem', 'image/jpg',);
        formData.append('Video', video);
        formData.append('Imagem', thumbnail);
        formData.append('Categoria', "Terror");

        // console.log(formData);

        api.post('/v1/Video', formData,
            {
                Authorization: "Bearer" + " " + localStorage.getItem('userToken'),
                'content-type': 'multipart/form-data'
            })
            .then(res => {
                console.log(`Success` + res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <Fragment>
            <Header />
            <h1>Fazer Upload de video</h1>
            <section>
                <div className="uploadVideo-container">
                    <form onSubmit={onFormSubmit}>
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
                        <label>Thumbnail:</label>
                        <input
                            className="file-container"
                            type="file"
                            onChange={e => {
                                setThumbnail(e.target.files[0]);
                                setThumbPreview(URL.createObjectURL(e.target.files[0]));
                            }}
                        />

                        {thumbPreview.length != 0 ?
                            <div className="image-preview">
                                <img src={thumbPreview} alt="Image preview"></img>
                            </div> :
                            <div></div>}

                        <label>Video: </label>
                        <input
                            className="video-container"
                            type="file"
                            onChange={e => {
                                setVideo(e.target.files[0])

                                // setVideoPrev(base64);
                            }}
                        />
                        
                        {/* <video height="350" autoPlay muted width="600" controls="controls">
                            <source src={videoPrev} type="video/mp4" />
                            <p>Desculpe, seu navegador não suporta</p>
                        </video> */}
                        

                        <button type="submit" className="button">Fazer upload</button>

                    </form>
                </div>
            </section>
        </Fragment>
    );
}

export default UploadVideo;