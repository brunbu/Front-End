import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componentes/header/Header'
import Home from './componentes/home/Home'
import Perfil from './componentes/perfil/Perfil'
import CadastroProduto from './componentes/CadastroProduto/CadastroProduto'
import ListaProdutos from './componentes/ListaProduto/ListaProduto'

function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />

        <Route path='/cadastrarProduto' element={<CadastroProduto />} />
        <Route path='/listaProdutos' element={<ListaProdutos />} />
      </Routes>
      </BrowserRouter>
      
  );
}

export default App
