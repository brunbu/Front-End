import "./Perfil.css"

const Perfil = ({nome , idade, profissao}) => {
    return(
        <article className="cartao">
            Nome: {nome} <br />
            Idade: {idade} <br />
            Profissão: {profissao} <br />
        </article>
        
    )
}

export default Perfil