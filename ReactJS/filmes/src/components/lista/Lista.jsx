import "./Lista.css";

// Importação de imagens:
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
    const listaSegura = props.lista || [];

    return (
        <section className="layout_grid">
            <div className="listagem">

                <h1>{props.tituloLista}</h1>
                <hr />

                <div className="tabela">
                    <table>

                        {/* CABEÇALHO */}
                        <thead>
                            <tr className="table_cabecalho">
                                <th>Nome</th>

                                <th style={{ display: props.visibilidade }}>
                                    Gênero
                                </th>

                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>

                        {/* CORPO */}
                        <tbody>

                            {listaSegura.length > 0 ? (
                                listaSegura.map((item, index) => (
                                    <tr
                                        className="item_lista"
                                        key={
                                            item?.idGenero ||
                                            item?.idFilme ||
                                            item?.id ||
                                            index
                                        }
                                    >

                                        {/* NOME / TÍTULO */}
                                        <td data-cell="Nome">
                                            {props.tipoLista === "genero"
                                                ? item?.nome
                                                : item?.titulo}
                                        </td>

                                        {/* GÊNERO (FILMES) */}
                                        <td
                                            data-cell="Gênero"
                                            style={{ display: props.visibilidade }}
                                        >
                                            {props.tipoLista === "filme"
                                                ? item?.genero?.nome || "-"
                                                : "-"}
                                        </td>

                                        {/* EDITAR */}
                                        <td data-cell="Editar">
                                            <button
                                                className="icon"
                                                onClick={() =>
                                                    props.funcEditar?.(item)
                                                }
                                            >
                                                <img src={Editar} alt="Editar" />
                                            </button>
                                        </td>

                                        {/* EXCLUIR */}
                                        <td data-cell="Excluir">
                                            <button
                                                className="icon"
                                                onClick={() =>
                                                    props.funcExcluir?.(item)
                                                }
                                            >
                                                <img src={Excluir} alt="Excluir" />
                                            </button>
                                        </td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">
                                        Nenhum registro encontrado.
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Lista;