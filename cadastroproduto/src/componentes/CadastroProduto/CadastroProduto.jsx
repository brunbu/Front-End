import { useContext, useState } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"


export const CadastroProduto = () => {
    const {Listaprodutos, setListaProduto} = useContext(ProdutoContext)
    const [novoProduto, setNovoProduto] = useState()

    return (
        <div>
            <h1>Cadastro de Produto</h1>
            <input type="text"
             value={novoProduto}
             onChange={(e) => {setNovoProduto(e.target.value)

             }}/>
             Cadastrar
             <button onClick={(e) => {
                setListaProduto([...Listaprodutos, novoProduto])
             }}></button>
             <p>Produto que será cadastrado: {novoProduto}</p>
        </div>
    )
}

export default CadastroProduto;