import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

export const Produto = () => {
    const {usuario} = useContext(UsuarioContext)
    return (
        <>
        <h3>Página Produto</h3>
        <h3>Bem-Vindo, {usuario}</h3>
        </>
    )
}