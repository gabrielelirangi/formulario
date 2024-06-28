import { Link } from "react-router-dom";
import "../../Style/stile_componenti_NavMenu/UserMenu.css";


function UserMenu(){
    return(
        <>
            <div className="box-user">
                <Link to="/registrati" className="bottoneUser registrati">Registrati</Link>
                <Link to="/accedi" className="bottoneUser accedi">Accedi</Link>
                <div className="linea"></div>
                <Link to="/assistenza" className="bottoneUser assistenza">Centro assistenza</Link>

            </div>
        </>
    )
}

export default UserMenu;