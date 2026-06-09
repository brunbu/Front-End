import { useContext, useState } from "react"
import { ProdutoContext } from "./ProdutoContext"


export const ProdutoProvider = ({children}) => {
    const [Listaprodutos, setListaProduto] = useState([ "Notebook", "Smartphone", "Tablet" ])

    return (
        <ProdutoContext.Provider
            value={{
                Listaprodutos,
                setListaProduto
            }}
        >
            {children}
        </ProdutoContext.Provider>
    )
}