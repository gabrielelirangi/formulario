import "../../Style/stile_componenti_NavMenu/NavMenu.css";
import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";
import BurgherMenu from "./BurgherMenu";
import { useState } from "react";
import UserMenu from "./UserMenu";
import Scroll from "./Scroll";



function NavMenu() {
  // definisco lo stato dell'icona User per il cambiamento del colore
  const [bottoneUser, setBottoneUser] = useState("white");

  //definisco lo stato per la visualizzazione del div con dei bottoni all'interno
  const [menuUser, setMenuUser] = useState(false);

  const [scrollaPagina, setScrollaPagina] = useState(false);
  const location = useLocation(); // permette di ottenere il perccorso della pagina corrente
  



  // funzioni per il cambio di colore dell'icona User
  const cambiaColoreUser = () => { //colore modificato
    setBottoneUser("#000080");
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
      <Scroll setScrollaPagina={setScrollaPagina}></Scroll>
      {/*div che contiene tutto la nav-menu di navigazione   */}
      <div className= {`NavMenu ${location.pathname === "/" || location.pathname === "/Home" ? (!scrollaPagina ? "" : "scrollaPagina") : "scrollaPagina"}`}>
        {/* inserimento logo e collegamenti alle pagine */}
        <div className="logo" >
          <h2 className="logo1">EINSTAIN</h2>
          <h2 className="logo2">FORMULARY</h2>
        </div>
        <div className="collegamenti">
          <Link to="/" className="NavMenu-bottone">
           
            Home
          </Link>
          <Link to="/materiale" className="NavMenu-bottone">
           
            Materiale
          </Link>
          <Link to="/blog" className="NavMenu-bottone">
            
            Blog
          </Link>

          <User size={28} onMouseEnter={cambiaColoreUser} onMouseLeave={ripristinaColoreUser} color={bottoneUser}
          onClick={mostraMenuUser} />
        </div>


        <div className="burgherMenu">
          <BurgherMenu className="burgher"></BurgherMenu>
        </div>
      </div>
      
      {menuUser && (
        <div className="userMenu">
          <UserMenu/>
        </div>
      )}


      
      
    </>
  );
}

export default NavMenu;
