import { useContext } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"

const Listaproduto = () => {
    const {Listaprodutos} = useContext(ProdutoContext)

    return (
        <>
        <h2>Lista de Produtos</h2>
        {
            Listaprodutos.map((item) => {
            return <p>{item}</p>
        })}
        </>
    )
}

export default Listaproduto;