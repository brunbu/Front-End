import "./CadastroFilme.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../Services/services";
import { Alerta } from "../../components/alerta/Alerta";

const CadastroFilme = () => {
  const [valor, setValor] = useState("");
  const [genero, setGenero] = useState("");
  const [listaGeneros, setListaGeneros] = useState([]);
  const [listaFilmes, setListaFilmes] = useState([]);
  const [editar, setEditar] = useState(false);
  const [id, setId] = useState(0);

  const getFilmes = async () => {
    try {
      const retornoAPI = await api.get("/Filme");
      setListaFilmes(retornoAPI.data);
      limparFormulario();
    } catch (error) {
      alert("Problemas ao carregar os dados da API");
      Alerta({
        title: "Cadastro de Gênero",
        text: "Problemas ao carregar os dados da API",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  };

  const getGeneros = async () => {
    try {
      const retornoAPI = await api.get("/Genero");
      setListaGeneros(retornoAPI.data);
      limparFormulario();
    } catch (error) {
      alert("Problemas ao carregar os dados da API");
      Alerta({
        title: "Cadastro de Gênero",
        text: "Problemas ao carregar os dados da API",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  };

  useEffect(() => {
      getFilmes();
      getGeneros();
    }, []);

    const cadastrarFilme = async (e) => {
       e.preventDefault();

        if (valor.trim().length == 0) {
      // alert("Preencher o gênero");

      Alerta({
        title: "Testeee",
        text: "Preencher o Filme",
        icon: "warning",
        confirmButtonText: "Cool",
      })
      return false;
    }
    const objCadastros = {
      nome: valor,
      imagem: "",
      id
    };
    try {
      const retornoAPI = await api.post("/Filme", objCadastros);
      Alerta({
        title: "Cadastro de Filme",
        text: `${valor} cadastrado com sucesso`,
        icon: "success",
        confirmButtonText: "Top!",
      });

      getFilmes(); // atualiza a listagem na tela
      limparFormulario(); //limpar formulário
    } catch (error) {
      alert("Erro ao cadastrar na API");
      Alerta({
        title: "Cadastro de Filme",
        text: "Correu um erro ao cadastrar na API",
        icon: "error",
        confirmButtonText: "Ok!",
      });
      console.log(error);
    }
  };
  const limparFormulario = () => {
    setValor("");
    setEditar(false);
    setId(0); // resetar o id
  };
  const excluirGenero = async (item) => {
   const result =  await Alerta({
      title: "Cadastro de Filme",
      text: `Quer apagar o Filme ${item.nome}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Apagar",
      cancelButtonText: "Jamais",
    })
    if(!result.isConfirmed)
    {//se não quer apagar para por aqui
      return false;
    }
    try {
      const retornoAPI = await api.delete(`/Filme/${item.idFilme}`);
      if (retornoAPI.status == 200 || retornoAPI.status == 204){
        Alerta({
          title: "Cadastro de Filme",
          text: "Apagado com sucesso",
          icon: "success",
          confirmButtonText: "Ok",
        });
        getFilmes();
      } else {
        Alerta({
          title: "Cadastro de Filme",
          text: "Problemas ao apagar o Filme",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      Alerta({
        title: "Cadastro de Filme",
        text: "Problemas ao carregar os dados da API",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.log(error);
    }
  };

  const preEditar = (item) => {
    setEditar(true);
    setValor(item.titulo);
    setId(item.idFilme);

    console.log(item)
  };

  const editarFilme = async (e) => {
    e.preventDefault();
    if (valor.trim().length == 0) {
      alert("Preencher o Filme")
      return false;
    }
    
    const formData = new FormData();
    formData.append("nome", valor);
    formData.append("genero", genero);

    console.log(id)
    try {
      const retornoAPI = await api.put(`/Filme/${id}`, formData);
      limparFormulario();
      getFilmes();
      Alerta({
        title: "Cadastro de Filme",
        text: "Gênero atualizado",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
       Alerta({
        title: "Cadastro de Filme",
        text: "Erro ao atualiar os dados na API",
        icon: "error",
        confirmButtonText: "Ok",
      });

      console.log(error);
    }
  };
    return(
        <>
        <Header/>
          <main>
          <Cadastro 
          //Define o título que será exibido no formulário
          tituloCadastro="Cadastro de Filme"
          // esconde o select de genero 
          // Define o texto que aparece dentro do campo de input
          placeholder="filme"
          // ----------------------------------------------------
          // Propriedades voltada ao cadastro:

          //Função que será chamada ao enviar o formulário (onSubmit)
          funcCadastro={editar ? editarFilme : cadastrarFilme}
          //Valor atual do campo de texto
          valor={valor}
          //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
          setValor={setValor}
          btnEditar={editar}
          funcEditar={editarFilme}
          cancelarEdicao={limparFormulario}
          listaGeneros={listaGeneros}
          genero={genero}
          setGenero={setGenero}
          />

          <Lista
          tituloLista="Lista de Filme"
          //Chama o método para validar:
          lista={listaFilmes}
          //Identifica o tipo de lista:
          tipoLista="Filme"
          funcExcluir={excluirGenero}
          funcEditar={preEditar}
          preEditar={preEditar}
          />
        </main>
      <Footer/>
        </>
    );
};

export default CadastroFilme;