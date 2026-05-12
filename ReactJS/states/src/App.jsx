import { useState } from "react"
import Contador from "./components/contador/contador.jsx"
import CadFruta from "./components/cadfruta/cadfruta.jsx"
import CicloDeVida from "./components/ciclodevida/ciclodevida.jsx"

function App () {
    const [mostra, setMostrar] = useState(true);
  
  const [nome,  setNome] = useState("Google")
  
  function trocarTexto() {
    setNome("Microsoft")
    }
    function fuiAbandonado() {
      setNome("Input Abandonado")
      }
      
      {/*
    
    */}{/*
      <h1>{nome} Page</h1>
      <button onClick={trocarTexto}>Mudar Texto</button>
      <button onClick={() => {
        return setNome("Yahoo")
        }}>Mudar Texto</button>
          
        
        <br />
        <input type="text" onBlur={fuiAbandonado} onChange={(evento) => setNome(evento.target.value)} />
        
        <Contador />
        <br /><br />
        <p>lorem ipsum <strong>{nome}</strong> dolor sit amet</p>
        */}
        {/* <CadFruta /> */}
    return(
          <>
          <button onClick={() => {
            setMostrar(!mostra);
          }}>Mostrar / Ocultar</button>
          {mostra && <CicloDeVida />}
          </>

    );
} 

export default App;