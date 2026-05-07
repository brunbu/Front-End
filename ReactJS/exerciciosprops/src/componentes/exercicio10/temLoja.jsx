import "./ItemLoja.css"

const ItemLoja = (nome, preco, categoria, estoque) => {
    if (estoque > 0){
        return(
        <p>
         Produto: {nome} <br />
         Preço: {preco} <br />
         Categoria: {categoria} <br />
         Quantidade do Produto{categoria} <br />
         Situação: Produto Disponivel  
        </p>
        );
    }   else {
        return(
        <p>
         Produto: {nome} <br />
         Preço: {preco} <br />
         Categoria: {categoria} <br />
         Quantidade do Produto:{categoria} <br />
         Situação: <strong>Produto Indisponivel</strong>
        </p>
        )
    }        
}

export default ItemLoja