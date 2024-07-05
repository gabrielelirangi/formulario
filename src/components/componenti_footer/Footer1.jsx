import { Link } from "react-router-dom";
import "../../Style/stile_componenti_footer/Footer1.css";



function Footer1(){
    return(
        <>
            <div className="footer1">
                <div className="testoFooter">
                    <h2>
                        Einstain-Formulary
                    </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, tenetur?</p>
                </div>

                <div className="boxemailFooter">
                    <div className="boxEmailLink">
                    <input type="email" placeholder="Email" className="inputEmailFooter"/>
                    <Link to="/registrati" className="linkFooter">
                        <div className="btnFooterEmail">Registrati</div>
                    </Link>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Footer1;