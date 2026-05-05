import './App.css';

function App() {
  return(
    <nav class="menu">
        <a href="#" className="menu__item">Home</a>
        <a href="#" className="menu__item">Quem Somos</a>
        <a href="#" className="menu__item">Contato</a>
        <a href="#" className="menu__item--success">Entrar</a>
        <a href="#" className="menu__item--button-default">Cadastrar</a>

        <div class="card-perfil">
        <img class="card-perfil__image" src="/images/Doakes Mater.jpg" alt="Imagem de perfil do usuário"></img>
    </div>
    </nav>

   
    
  );
}
export default App;