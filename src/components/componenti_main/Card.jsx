/* eslint-disable react/prop-types */
//utilizzero le props per avere una card dinamica e non scrivere n volte lo stesso html
import { Link } from "react-router-dom";
import "../../Style/stile_componenti_main/Card.css";



function Card({ img, alt, titolo, descrizione, collegamento }){

    return(
        <>
            <div className="carta">
                <Link to={collegamento} className="linkCard">
                
                    {/* immagine carta  */}
                    <img src={img} alt={alt} className="imgCarta"/>
                    {/* titolo della carta */}
                    <h2 className="titoloCarta">{titolo}</h2>
                    {/* descrizione carta */}
                    <p className="descrizioneCarta">{descrizione}</p>
                </Link>
            </div>
        </>
    )
}

export default Card;