import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CadastroFilme from "../pages/cadastrofilme/CadastroFilme";
import CadastroGenero from "../pages/CadastroGenero/CadastroGenero";
import Login from "../pages/login/Login";

const Rotas = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/filme" element={<CadastroFilme />} />
        <Route path="/genero" element={<CadastroGenero />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;