import "./Produto.css"

const Produto = ({nome, preco, descricao}) => {
    return(
        <p>
        Nome:   {nome} <br />
        Preço:    {preco.toFixed(2)} <br />
        descrição:    {descricao} <br />
        
        </p>
    )
}

export default Produto;