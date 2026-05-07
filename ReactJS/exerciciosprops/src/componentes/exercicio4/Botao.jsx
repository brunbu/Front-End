import "./Botao.css"

const Botao = ({texto, cor}) => {
    return(
        <button style={
        {
            backgroundcolor: cor
        }
    }>{texto}</button>
    )
}
 export default Botao;