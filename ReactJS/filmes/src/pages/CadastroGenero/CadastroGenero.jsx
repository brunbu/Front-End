import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import "./CadastroGenero.css"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../services/services"
import Lista from "../../components/lista/Lista"
//biblioteca
import Swal from "sweetalert2"
import { Alerta } from "../../components/alerta/Alerta"

//form cadastra e editar
const CadastroGenero = () => {
    //states e variáveris
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])
    const [idEditar, setIdEditar] = useState(0)
    const [editar, setEditar] = useState(false)


    //ciclo de vida e funções
    const cadastrarGenero = async (e) => {
        e.preventDefault()
        //validação dos dados preenchido
        if (valor.trim().length == 0) {
          Alerta({
            title:"Cadastro de Gênero",
            text: "Gênero deve ser preenchido antes de cadastrar",
            icon:"warning",
            confirmButtonText: "ok",
          });
          return false;
        }

        const objCadastro = {
            nome: valor
        }

        try {
            const retornoAPI = await api.post("/Genero", objCadastro)

            if (retornoAPI.status == 201) {
                Swal.fire({
                title: "Cadastro de gênero",
                text: "Gênero cadastrado com sucesso!",
                icon: "success"
            })
                limparFormulario()
            } else {
                  Swal.fire({
                title: "Cadastro de gênero",
                text: "Houve algum probelema ao cadastrar!!",
                icon: "error"
            })
                // alert()
            }
        } catch (error) {
               Swal.fire({
                title: "Cadastro de gênero",
                text: "Erro na chamada da API",
                icon: "error"
            })
            // alert("Erro na chamada da API")
            console.log(error)
        }

        return false
    }

    const limparFormulario = () => {
        setValor("")
        setEditar(false)
        setIdEditar(0)
    }


const excluirGenero = async (item) => {

    Swal.fire({
        title: "Você tem certeza?",
        text: "Você não poderá reverter essa ação",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, deletar!"
    }).then(async (result) => {

        if (result.isConfirmed) {

            try {

                await api.delete(`/Genero/${item.idGenero}`)

                // remove da lista
                const novaLista = listaGeneros.filter(
                    genero => genero.idGenero !== item.idGenero
                )

                setListaGeneros(novaLista)

                Swal.fire({
                    title: "Deletado!",
                    text: "Gênero excluído com sucesso!",
                    icon: "success"
                })

            } catch (error) {

                console.log(error)

                Swal.fire({
                    title: "Erro!",
                    text: "Erro ao excluir gênero",
                    icon: "error"
                })
            }
        }
    })
}
    //=================
    //limpa o formulário e esconde e o botão
    const cancelarPreEditar = () =>{
        limparFormulario()
    }




//pre editar
    const preEditar = (item) => {
        setIdEditar(item.idGenero);
        setValor(item.nome);
        setEditar(true);
        console.log(item);
    };


    //editar egenero
    const editarGenero = async (item) => {
        // alert(`agora sim: gênero: ${valor} / id: ${idEditar}`)

        //validação
        if (valor.trim().length == 0) {
            alert("Gênero deve ser preenchido antes de cadastrar!!")
            return false
        }

        //chama objCAdastrar
        const objCadastro = {
            idGenero: idEditar,
            nome: valor
        }

        try {
            const retornoAPI = await api.put(`/Genero/${idEditar}`, objCadastro)

            if (item.idGenero == idEditar) {
                return objCadastro
                // alert("Gênero cadastrado com sucesso!")
                // limparFormulario()
            }
            return item
        } catch (error) {
             Swal.fire({
                title: "Cadastro de gênero",
                text: "Erro na chamada da API",
                icon: "error"
            })
            // alert("Erro na chamada da API")
            console.log(error)
        }


    }

    useEffect(() => {
        //chamar os dados da api aqui
        getGeneros()
    }, [])

    //get generos
    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero") //cahama api
            const dados = retornoAPI.data//extrai os dados retornados
            setListaGeneros(dados)//guarda os dados no state

        } catch (error) {
            // alert("erro ao retorna os dados")
        }
    }

    //o jsx
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="gênero"

                    //state
                    valor={valor}

                    //função que muda o state
                    cancelarEdicao={limparFormulario}
                    // setEditar={setEditar}
                    setValor={setValor}
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    btnEditar={editar}
                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"
                    funcExcluir={excluirGenero}
                    funcEditar={preEditar}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero