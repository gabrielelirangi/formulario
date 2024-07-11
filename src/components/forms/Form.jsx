/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../Style/form/Registrati.css";

function Form({ titolo, testoBenvenuto, testo, placeholder, bottone, home, accedi }) {
  return (
    <>
      <div className="registrati">
        <form action="" className="form">
          {/* il form deve essere formato da un titolo che sara' tipo registrati o accedi e una frase di benvenuto.
            poi inserire un input per il nome e uno per la password, un bottone per inviare il form e un link per tornare alla home */}
          <h3 className="titoloForm">{titolo}</h3>
          <p className="benvenutoForm">{testoBenvenuto}</p>
          <div className="lineaForm"></div>
          <div className="campiForm">
            <input
              type="text"
              placeholder={placeholder}
              className="nickName input"
            />
            <input
              type="password"
              placeholder="inserisci la password"
              className="password input"
            />
            <button type="submit" className="bottoneForm">
              {bottone}
            </button>
            <div className="linkForm">
              <Link to={accedi} className="link_form">
                {testo}
              </Link>
              <Link to={home} className="link_form">
                Torna alla home
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
