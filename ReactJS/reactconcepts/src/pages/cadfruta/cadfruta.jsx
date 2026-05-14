import { useState } from "react";
import "./cadfruta.css"

function CadFruta() {
    
    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [arrfrutas, setArrFrutas] = useState([

        { id: 1, nome: "Mamão", quantidade: 10 },
        { id: 2, nome: "Abacate", quantidade: 20 },
    ])
    
    function Cadastrar(e) {
        e.preventDefault();
        setArrFrutas([
            ...arrfrutas,
            { id: Date.now(), nome: fruta, quantidade: quantidade }
        ]);
        limparFormulario();
        return false;
    }

    function limparFormulario() {
        setFruta("");
        setQuantidade(0);
    }
        
    return(
        <section className="sessao-cadastro">
            <h1>Cadastro</h1>
            <form action="" method="" onSubmit={Cadastrar}> 
        <fieldset className="cadastro">
        <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da fruta</label>
        <input 
        type="text" 
        id="fruta" 
        className="cadastro__entrada"
        placeholder="Digite o nome da Fruta"
        onChange={(e) => {
            setFruta(e.target.value); 
        }} 
         />
         <br />
        <label htmlFor="fruta" className="cadastro__Q-rotulo">Digite a quantidade de fruta</label>
        <input 
        type="number" 
        id="quantidade" 
        className="cadastro__Q-entrada"
        placeholder="Digite a quantidade de fruta"
        onChange={(q) => {
            setQuantidade(q.target.value);
        }} 
        />
        <br />
        <button 
        type="submit"
        className="cadastro__btn-Q-cadastrar"
        >Cadastrar</button>
        <br /> 
        <label htmlFor="">{quantidade}</label>
        </fieldset>
        </form>


        <ul className="listagem">
            {
                arrfrutas.map((f) => {
                    return <li key={f.id}>
                        Fruta: {f.nome}  |  Quantidade: {f.quantidade}
                        </li>
                })
            }
        </ul>
        </section>
        
    )
}

export default CadFruta;