import "./Botao.css"

const Botao = (props) => {
    return(

        <button className="botao" 
        type={props.btnEditar ? "button" : "submit"}
        onClick={() => {
            if(props.btnEditar) {
                setEditar(false)
                props.funcEditar()
                return false;
            }
        }}
        >

        {props.nomeDoBotao}
        </button>

    )
}

export default Botao;