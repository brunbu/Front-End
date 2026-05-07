import "./App.css"
import Saudacao from "./componentes/exercicio1/saudacao"
import Produto from "./componentes/exercicio2/Produto"
import Perfil from "./componentes/exercicio3/Perfil"
import Botao from "./componentes/exercicio4/Botao"
import Filme from "./componentes/exercicio5/Filme"
import Aluno from "./componentes/exercicio6/Aluno"
import { Card } from "./componentes/exercicio7/Card"
import Contato from "./componentes/exercicio8/Contato"
import Jogo from "./componentes/exercicio9/Jogo"

const App = () => {
  return(
    <>
    {/*<Saudacao nome= "Bruno"/>
    <Saudacao nome= "Pedro"/>
    <Saudacao nome= "Murilo"/>*/}

    {/*
    <Produto nome="Pão"
    preco={3.70}
    descricao="Pão quentinho"/>
    */}
      {/*
      <Perfil  nome="Bruno"
      idade={17}
      profissao="Catador de latinha"
      />
      
      */}
      {/* <Card>
        <Botao color="red" texto="texto do botão"/>
        <Botao color="greesn" texto="texto do botão"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nihil itaque voluptates quis quasi explicabo eveniet facilis repellendus eligendi rem perspiciatis id perferendis molestias architecto quia, dolores repellat enim nobis?</p>
        </Card>
      */}

      {/*
        <Filme titulo="Carros" 
        ano={2006}
        genero="Animação"
        nota={7.3}
        />
      */}

      {/*
        <Aluno nome="Bruno"
        curso="Dev"
        />
      */}


      { /*
        <Contato nome="Bruno" telefone="(11) 98762-6543" email="brunorsilva@gmail.com"/>  
      */}

      {/*
        <Jogo nome="Uncharted 4" plataforma="Ps4" preco={200.00} imagem={imagem}/>
      */}

      {/*
        <ItemLoja nome="Camisa Polo" preco={79.99} categoria="Vestuario" estoque={5}/>
      */}



    </>
  )
}

export default App;