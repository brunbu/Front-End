import { useState } from "react" 
import "./contador.css"
const Contador = () => {
    const [valor, setValor] = useState(0)
    
    function incrementar() {
        setValor(valor + 1)

        if (valor >= 10) {
        setValor(0)
    }
    }
    function reducao() {
        setValor(valor - 1)
    }

    return(
        <>
        <p>Contagem: {valor}</p>
        <button onClick={incrementar}>++</button> <br />
        <button onClick={reducao}>--</button>
        </>
    )
}

export default Contador;