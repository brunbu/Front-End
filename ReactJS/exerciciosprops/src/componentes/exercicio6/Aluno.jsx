import "./Aluno.css"
import aluno from "../../assets/react.svg"

const Aluno = ({nome, curso}) => {
    return(
        
        <p>
        Imagem do Aluno: <img  className="foto-Aluno"src={aluno} alt="imagem do aluno" /><br />
         Aluno: {nome} <br />
        Curso: {curso}   
        </p>
        
    )
}

export default Aluno