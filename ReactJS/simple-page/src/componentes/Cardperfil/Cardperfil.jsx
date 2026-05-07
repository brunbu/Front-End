import "./Cardperfil.css"
import people from "../../assets/react.svg"

function Cardperfil() {
    return(
     <div className="card-perfil">
    <img className="card-perfil__image" src={people} alt="Imagem de perfil do usuário"></img>
    </div>
    );
}

export default Cardperfil;