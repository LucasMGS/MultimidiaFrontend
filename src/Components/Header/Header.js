import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./pc.css";

// function Header() {
//   const username = localStorage.getItem("username");
//   var isLoggedIn = username != null;

//   function LogOut() {
//     localStorage.removeItem("userToken");
//     localStorage.removeItem("username");
//   }

//   return (
//     <header>
//       <div className="banner">
//         <Link to="/" className="link link-multimidia">
//           <h3>Multimidia</h3>
//         </Link>
//       </div>
//       {/* <h2 style={{visibility:`${isLoggedIn ? "visibility" : "hidden"}`}}>Seja bem vindo, {username}</h2> */}
//       <h2 className="welcome">Seja bem vindo, {username}</h2>
//       <div className="account-container">
//         <Link to="/login" className="link">
//           <h3>Entrar</h3>
//         </Link>
//         <Link to="/signup" className="link">
//           <h3>Cadastrar</h3>
//         </Link>
//         <Link to="/" className="link" onClick={LogOut}>
//           <h3>Sair</h3>
//         </Link>
//       </div>
//     </header>
//   );
// }

// export default Header;
function Header() {
  const username = localStorage.getItem("username");
  var isLoggedIn = username != null;

  function LogOut() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
  }
  return (
    <Fragment>
      <header>
        <div className="banner_content">
          <Link className="link-multimidia" to="/">
            <h3> MULTIFLIX </h3>
          </Link>
          <h2 style={{ visibility: `${isLoggedIn ? "visibility" : "hidden"}` }}>
            {" "}
            Seja bem-vindo, {username}
          </h2>
          <div
            className="account-container"
            style={{ width: `${isLoggedIn ? "320" : "250"}` }}
          >
            {!isLoggedIn ? (
              <Link className="link" to="/signup">
                <h3> Criar uma conta </h3>
              </Link>
            ) : (
              <Link className="link" to="/profile">
                <h3> Perfil </h3>
              </Link>
            )}
            {isLoggedIn ? (
              <Link className="link" to="/uploadVideo">
                <h3> Upar video </h3>
              </Link>
            ) : (
              <div></div>
            )}
            {isLoggedIn ? (
              <Link className="link" to="/" onClick={LogOut}>
                <h3> Sair </h3>
              </Link>
            ) : (
              <Link className="link" to="/login">
                <h3>Entrar</h3>
              </Link>
            )}
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
