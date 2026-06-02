import api from "../../db.json"
const { useEffect, useState } = require("react");

const CadastroMusica = () => {
    const [valor, setValor] = useState("");
    const [listaMusica, setListaMusica] = useState([]);
    const [editar, setEditar] = useState(false);
    const [id, setId] = useState(0);

    const getMusica = () => {
        try {
            const retornoAPI = api.get("/Musica");
            setMusica(retornoAPI.data);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect (() => {
        getMusica();
    },[])
     const cadastrarMusica = async (e) => {
    e.preventDefault();

    // Validar o formulário
    if (valor.trim().length == 0) {
      // alert("Preencher o gênero");

      Alerta({
        title: "Testeee",
        text: "Preencher o Musica",
        icon: "warning",
        confirmButtonText: "Cool",
      })
      
      return false;
    }
    const objCadastros = {
      nome: valor,
    };
    try {
        const retornoAPI = await api.post("/Musica", objCadastros);
        getMusica();
        limparFormulario();
    } catch (error) {
        console.log(error)
    }
};
    const limparFormulario = () => {
    setValor("");
    setEditar(false);
    setId(0); // resetar o id
  };

  const excluirMussica = async (item) => {
   const result =  await Alerta({
      title: "Cadastro da Musica",
      text: `Quer apagar a Musica ${item.nome}?`,
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

    try {//se quer apagar, chama a API
      const retornoAPI = await api.delete(`/Musica/${item.id}`); // chama a api

      if (retornoAPI.status == 200 || retornoAPI.status == 204) {
        // alert("Apagado com sucesso");
        Alerta({
          title: "Cadastro de Musica",
          text: "Apagado com sucesso",
          icon: "success",
          confirmButtonText: "Ok",
        });
        getGeneros();
      } else {
        // alert("Problemas ao apagar o gênero");
        Alerta({
          title: "Cadastro da Musica",
          text: "Problemas ao apagar a Musica",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      // alert("Problemas ao carregar os dados da API");
      Alerta({
        title: "Cadastro de Musica",
        text: "Problemas ao carregar os dados da API",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.log(error);
    }
  };



    return(
        <CadastroMusica
        valor={valor}
        setValor={setValor}
        btnEditar={editar}
        cancelarEdicao={limparFormulario}
        />
    )
}



export default CadastroFilme;