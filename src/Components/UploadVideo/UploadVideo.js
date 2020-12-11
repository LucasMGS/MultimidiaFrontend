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
            //  thumbPreview: [],
        };
      
    }
    handleMedia(e) {
        // var base64 = URL.createObjectURL(e.target.files[0]);
        // var data = e.target.files[0];
        // console.log(base64);
        // console.log(thumbnail);
       this.setState(
            { 
                thumbnail: e.target.files[0], 
                
                // thumbPreview: URL.createObjectURL(e.target.files[0]) 
            });
            console.log(e.target.files[0]);
            console.log(this.state.thumbnail);
    }
    handleSubmitFile(e) {
        e.preventDefault();


        if (this.state.thumbnail !== null) {

            var formData = new FormData();
            formData.append('uploadImage', this.state.thumbnail);

            api.post(
                'v1/Video/CadastrarVideo',
                formData,
                {
                    headers: {
                        // "Authorization": "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
                        "Content-type": "multipart/form-data",
                    },
                }
            )
                .then(res => {
                    console.log(`Success` + res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    render() {

        

        
        return (
            <Fragment>
                <Header />
                <h1>Fazer Upload de video</h1>
                <section>
                    <div className="uploadVideo-container">
                        <form onSubmit={this.handleSubmitFile}>
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
                                onChange={e => this.handleMedia(e)}
                            />

                            <label>Video: </label>
                            <input
                                className="video-container"
                                type="file"
                                // value={video}
                                onChange={e => this.handleMedia(e)}
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
