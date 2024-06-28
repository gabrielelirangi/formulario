import "../../Style/stile_componenti_NavMenu/NavMenu.css";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import BurgherMenu from "./BurgherMenu";
import { useState } from "react";
import UserMenu from "./UserMenu";


function NavMenu() {
  // definisco lo stato dell'icona User per il cambiamento del colore
  const [bottoneUser, setBottoneUser] = useState("white");

  //definisco lo stato per la visualizzazione del div con dei bottoni all'interno
  const [menuUser, setMenuUser] = useState(false);


  // funzioni per il cambio di colore dell'icona User
  const cambiaColoreUser = () => { //colore modificato
    setBottoneUser("#00bfff");
  }

  const ripristinaColoreUser = () => { //colore originale
    setBottoneUser("white");
  }


  // funzione per la visualizzazione del sub-menu al click dell'icona user
  const mostraMenuUser = () => {
    setMenuUser(!menuUser);
  }


  return (
    <>
      {/*div che contiene tutto la nav-menu di navigazione   */}
      <div className="NavMenu">
        {/* inserimento logo e collegamenti alle pagine */}
        <div className="logo" >
          <h2 className="logo1">Einstain</h2>
          <h2 className="logo2">Formulary</h2>
        </div>
        <div className="collegamenti">
          <Link to="/" className="NavMenu-bottone">
           
            Home
          </Link>
          <Link to="/servizi" className="NavMenu-bottone">
           
            Servizi
          </Link>
          <Link to="/blog" className="NavMenu-bottone">
            
            Blog
          </Link>

          <User size={30} onMouseEnter={cambiaColoreUser} onMouseLeave={ripristinaColoreUser} color={bottoneUser}
          onClick={mostraMenuUser} />
        </div>


        <div className="burgherMenu">
          <BurgherMenu></BurgherMenu>
        </div>
      </div>
      
      {menuUser && (
        <div className="userMenu">
          <UserMenu />
        </div>
      )}


      
      
    </>
  );
}

export default NavMenu;
