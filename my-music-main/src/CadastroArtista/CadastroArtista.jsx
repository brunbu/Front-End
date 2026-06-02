
const { useEffect, useState } = require("react");

const CadastroMusica = () => {
    const [listaArtista, setMusica] = useEffect ([])
    const [editar, setEditar] = useEffect ("")

    const getMusica = () => {
        try {
            const retornoAPI = await api.get("/Musica");
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

    return(
        listaMusica
    )
}



export default CadastroFilme;