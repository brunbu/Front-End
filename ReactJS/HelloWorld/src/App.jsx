import './App.css'
import Paragrafo from './components/paragrafos/paragrafo';
import Title from './components/Title/title';
function App() {
 return (
  <>
  <div>
    <Title texto="Bem Vindo, sou um titulo"/>
    <Title texto="Eu sou outro titulo"/>
    <Paragrafo linha="Sou um Paragrafo"/>
  </div>
  </>
 );
}

export default App;
