import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componentes/header/Header'
import Home from './componentes/home/Home'
import Perfil from './componentes/perfil/Perfil'
import { Produto } from './componentes/produto/Produto'
function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/produto' element={<Produto />} />
      </Routes>
      </BrowserRouter>
      
  );
}

export default App
