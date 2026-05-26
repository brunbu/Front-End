import { useState } from 'react'
import './App.css'
import { Rotas } from './routes/routes'

function App() {
  
  const [tema, setTema] = useState("Light")

  //função de trocar o tema
  const trocarTema = () => {
    if (tema === "Light") {
      console.log(tema)
      setTema("Dark")
    }
    else {
      console.log(tema)
      setTema("Light")
    }
  }


  return (
    <main className={tema}>
      <Rotas tema={tema} funcTrocarTema={trocarTema} />
    </main>
  )
}

export default App