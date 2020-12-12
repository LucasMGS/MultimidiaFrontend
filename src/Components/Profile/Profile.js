import React, { Fragment } from "react";
import Header from "../Header/Header";
import Row from "../Row/Row";
import "./styles.css";
import video1 from "../../assets/videos/video1.mp4";
import image1 from '../../assets/imagens/imagem1.jpg';

//arquivo do perfil do usuário
function Profile() {
  return (
    <Fragment>
        {/* component Header */}
      <Header />
      {/* div do titulo "Seus vídeos" */}
      <div className="title-container">
        <h2> Seus vídeos</h2>
      </div>

      {/* tag de video para mostrar o video em tela com as devidas propriedades */}
      <video
        className="video-media"
        controls
        width="420"
        height="300"
        autoPlay
        muted
        name="media"
      >
        <source src={video1} type="video/mp4" />
      </video>
      <div className="title-container">
        <h2> Suas imagens</h2>
      </div>
    <img className="image-media" src={image1} height="300" width="250"/>
    </Fragment>
  );
}

export default Profile;
