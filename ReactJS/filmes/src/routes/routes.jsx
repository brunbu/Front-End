import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login";
import CadastroFilme from "../pages/cadastrofilme/CadastroFilme";
import CadastroGenero from "../pages/CadastroGenero/CadastroGenero";


export const Rotas = (props) => {
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Login />} path="/"/>
            <Route element={<CadastroFilme />} path="/filmes"/>
            <Route element={<CadastroGenero tema={props.tema} funcTrocarTema={props.funcTrocarTema} />} path="/generos"/>
        </Routes>
        </BrowserRouter>
    )
}