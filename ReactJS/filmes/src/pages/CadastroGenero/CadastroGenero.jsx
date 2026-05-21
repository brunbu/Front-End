import "./CadastroGenero.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react";   
import api from "/src/services/services";

const CadastroGenero = () => {

    //states e variáveis
    const [valor, setValor] = useState("") 
    const [listaGeneros, setListaGeneros] = useState([
    ])
    //ciclo de vida e funções 

    //POST
   const cadastrarGenero = async (e) => {
    e.preventDefault();

    if (valor.trim().length === 0) {
        alert("Preencha o campo de Gênero");
        return;
    }

    const objCadastro = {
        Nome: valor
    };

    try {
        const retornoAPI = await api.post("/Genero", objCadastro);

        if (retornoAPI.status === 201) {
            alert("Cadastro efetuado com sucesso!");
            limparFormulario();
        } else {
            alert("Erro ao cadastrar o Gênero");
        }

    } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("ERRO COMPLETO:", error);

    alert("Erro na chamada da API");
}
};
const limparFormulario = () => {
    setValor("");
};

const excluirGenero = async (item) => {
     try {
         const retornoAPI = await api.delete(`/Genero/${item.idGenero}`);
         getGeneros();
         limparFormulario();
} catch (error) {
         console.log("STATUS:", error.response?.status);
         console.log("DATA:", error.response?.data);
         console.log("ERRO COMPLETO:", error);
         alert("Erro na chamada da API");
     }
};

const editarGenero = async (id) => {
    alert("Editando Gênero...");
    // try {
    //     const retornoAPI = await api.put(`/Genero/${id}`);
    //     if (retornoAPI.status === 200) {
    //         alert("Cadastro editado com sucesso!");
    //         limparFormulario();
    //     } else {
    //         alert("Erro ao editar o Gênero");
    //     }
    // } catch (error) {
    //     console.log("STATUS:", error.response?.status);
    //     console.log("DATA:", error.response?.data);
    //     console.log("ERRO COMPLETO:", error);
    //     alert("Erro na chamada da API");
    // }
};

useEffect(() => {
    console.log("Chamou useEffect");
    getGeneros();
}, [])

const getGeneros = async () => {
    console.log("Entrou no getGeneros");

    try {
        const retornoAPI = await api.get("/Genero");
        console.log(retornoAPI);

        const dados = retornoAPI.data;
        setListaGeneros(dados);

    } catch (error) {
        console.log(error);
    }
};
    //o jsx
    return (
        <>
            <Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="gênero"
                    valor={valor}
                    //função que muda o state
                    setValor={setValor}
                    funcCadastro={cadastrarGenero}
                />
                <h1>Teste</h1>
                {/* <Lista 
                tituloLista="Lista de Gêneros"
                visibilidade="none"
                tipoLista="genero"
                lista={listaGeneros}
                funcEditar={editarGenero}
                funcExcluir={excluirGenero}
                /> */}
            </main>

            <Footer />
        </>
    );
}

export default CadastroGenero;