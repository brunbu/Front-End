import { useContext } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";
import { useState } from "react";

const Perfil = () => {
    const {produto, setproduto} = useContext(ProdutoContext)
    const [novoProduto, setNovoProduto] = useState()
    return (
        <div>
            <h2>Página Perfil ({produto})</h2>

            <input 
            type="text" 
            placeholder="digite o novo usuário"
            onChange={(e) => {
                setNovoProduto(e.target.value)
            }}
            />
            <button 
            onClick={() => {
                setProduto(novoProduto)


            }}
            
            >Trocar Usuário</button>
            <p>Novo Usuário: <strong>{novoProduto}</strong></p>
        </div>
    )
}

export default Perfil;