import { useEffect, useState } from "react"
import "./ciclodevida.css"


export default function CicloDeVida() {
    const [contador, setContador] = useState(0)
    useEffect(() => {
        console.log("Componente Montado");
        return () => {
            console.log("Componente Desmontado")
        }
    }, []
)
 useEffect(() => {
    console.log("Componente Atualizado");
    console.log(`Componente Atualizado ${contador}`);
 }, [contador])

    return(
        <>
        <h1>Contador: {contador}</h1>
        <button onClick={() => {
            setContador(contador + 1);
        }}>Contar</button>
        </>
    )
}