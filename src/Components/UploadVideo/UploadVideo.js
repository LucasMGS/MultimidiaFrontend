import React, { Fragment, useState, Component } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';
import './styles.css';

export class UploadVideo extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            thumbnail: null,
            video: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    setThumbnail(e) {
        this.setState({
            thumbnail: e.target.files[0],
        },
            () => console.log('Deuita ' + this.state.thumbnail));
    }

    setVideo(e) {
        this.setState({
            video: e.target.files[0],
        },
            () => console.log('Deuita ' + this.state.video));
    }

    convertToBase64(e) {
        var reader = new FileReader();
        reader.onload = function () {
            var arrayBuffer = e,
                array = new Uint8Array(arrayBuffer),
                binaryString = String.fromCharCode.apply(null, array);

            debugger;
        }
        reader.readAsArrayBuffer(e);

    }

    onFormSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('Nome', 'Deuita');
        formData.append('Sinopse', "Filme lindo do deuita",);
        formData.append('ContentTypeVideo', 'video/mp4',);
        formData.append('ContentTypeImagem', 'image/jpg',);
        formData.append('Video', this.state.video);
        formData.append('Imagem', this.state.thumbnail);
        formData.append('Categoria', "Filmes do Deuita");

        console.log(formData);

        api.post('v1/Video', formData, { 'content-type': 'multipart/form-data' })
            .then(res => {
                console.log(`Success` + res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <Fragment>
                <Header />
                <h1>Fazer Upload de video</h1>
                <section>
                    <div className="uploadVideo-container">
                        <form onSubmit={this.onFormSubmit}>
                            <label>Titulo do video:</label>
                            <input
                                // value={titulo}
                                type="text"
                            // onChange={e => setTitulo(e.target.value)}
                            />
                            <label>Sinopse:</label>

                            <input
                                type="text"
                            // value={sinopse}
                            // onChange={e => setSinopse(e.target.value)}
                            />
                            <label>Thumbnail:</label>
                            <input
                                className="file-container"
                                type="file"
                                onChange={e => this.setThumbnail(e)}
                            />

                            <label>Video: </label>
                            <input
                                className="video-container"
                                type="file"
                                onChange={e => this.setVideo(e)}
                            />

                            <div className="image-preview">
                                <img src={this.thumbnail} alt="Image preview"></img>
                            </div>
                            <source src="" className="file-container" type="file" type="video/mp4" />
                            <button type="submit" className="button">Fazer upload</button>

                        </form>
                    </div>
                </section>
            </Fragment>
        );
    }
}
// function UploadVideo() {
//     const [titulo, setTitulo] = useState([]);
//     const [sinopse, setSinopse] = useState([]);
//     const [thumbPreview, setThumbPreview] = useState([]);
//     const [thumbnail, setThumbnail] = useState([]);
//     const [video, setVideo] = useState('');



//     console.log(thumbnail);




//     return (

//     );

// }
