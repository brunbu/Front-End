import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProdutoContext } from "../../context/ProdutoContext";

const Header = () => {
    const {usuario} = useContext(ProdutoContext)
    return (
        <header>
            <nav>
                <Link to={"/"}>Home</Link> {" | "}
                <Link to={"/perfil"}>Perfil</Link> {" | "}
                <Link to={"/produto"}>Produto</Link> {" | "}
                <Link to={"/cadastrarProduto"}>Cadastrar Produto</Link> {" | "}
                <Link to={"/listaProdutos"}>Lista de Produtos</Link>
            </nav>
            <h2>Bem-vindo {usuario}</h2>
        </header>
    )
}

export default Header;