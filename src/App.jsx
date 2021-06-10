import React, { useState, useEffect } from "react";
import "./components/reset.css";
import "./App.scss";
import getUsuario from "./services/usuario";
import UsuarioPagina from "./components/UsuarioPagina";

const App = () => {
  const [foto, setFoto] = useState("");
  const [nome, setNome] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    getUsuario()
      .then((response) => {
        setFoto(response.foto);
        setNome(response.nome);
        setScore(response.score);
        console.log(response.score);
      })
      .catch((response) => {
        alert(response.erro);
      });
  }, []);

  return (
    <div className="App">
      <UsuarioPagina foto={foto} nome={nome} score={score} />
    </div>
  );
};
export default App;
