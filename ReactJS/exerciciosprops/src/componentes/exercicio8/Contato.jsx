import "./Contato.css"

const Contato = ({nome, telefone, email}) => {
    return(
        <p>{nome} <br />
        {telefone} <br />
        {email}</p>
    )
}

export default Contato