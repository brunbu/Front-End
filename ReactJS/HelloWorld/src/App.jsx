import './App.css'
import Paragrafo from './components/paragrafos/paragrafo';
import Title from './components/Title/title';
function App() {
 return (
  <>
  <div>
    <Title nome="Bruno" sobrenome="Silva" texto="Bem Vindo"/>
    <Title texto="Bem Vindo, sou um titulo"/>
    <Paragrafo linha="Sou um Paragrafo"/>
  </div>
  </>
 );
}

export default App;
