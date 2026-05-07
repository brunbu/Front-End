import "./Filme.css"

const Filme = ({titulo, ano, genero, nota}) =>{
    return(
        <p>
        Titulo: {titulo} <br />
        Ano: {ano.toFixed(2)} <br />
        Genero: {genero} <br />
        Nota: {nota.toFixed(2)}</p> 
    )
}

export default Filme;