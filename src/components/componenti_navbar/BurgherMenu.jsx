import { Menu } from "lucide-react";
import { useState } from "react";
import "../../Style/stile_componenti_NavMenu/BurgherMenu.css";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

function BurgherMenu(){ // passo la prop onclick cosi da far visualizzare al click dell'icona del burghermenu un div con degli elemeni all'interno
    const [mostraMenu, setMostraMenu] = useState(false);
    const [cambiaColoreBurgher, setCambiaColoreBurgher] = useState("white");
    


    const visualizzaMenu = () => {
        setMostraMenu(!mostraMenu);
      };

      //funzione per chiudere il menu
      const chiudiMenu = () => {
        setMostraMenu(false);
      };


      //funzioni per il cambio colore dell'icona

      const cambiaColore = () => {
        setCambiaColoreBurgher("#000080");
      };

      const ripristinaColore = () => {
        setCambiaColoreBurgher("white");
      };

      
    
      return (
        <>
          <Menu size={40}  onClick={visualizzaMenu} 
          onMouseEnter={cambiaColore} onMouseLeave={ripristinaColore} color={cambiaColoreBurgher} />
          {mostraMenu && (
            <div className="menuBurgher">
              <div className="chiudiBurgherMenu">
                <X color="#dcdcdc" className="x" size={30} onClick={chiudiMenu} 
                 />
              </div>
              <div className="menuBurgherlink">
                <Link to="/" className="bottoniBurgher">Home</Link>
                <Link to="/materiale" className="bottoniBurgher">Materiale</Link>
                <Link to="/blog" className="bottoniBurgher">Blog</Link>
                <div className="linea2"></div>
                <Link to="/registrati" className="bottoniBurgher " >Registrati</Link>
                <Link to="/accedi" className="bottoniBurgher">Accedi</Link>

              </div>
              
              
              
            </div>
          )}
        </>
      );
    }

export default BurgherMenu;