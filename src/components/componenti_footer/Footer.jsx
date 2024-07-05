/*contenitore di tutti i componenti che formano il footer */
import "../../Style/stile_componenti_footer/Footer.css";
import Footer1 from "./Footer1";


function Footer(){
    return(
        <>
            <div className="footer">
                <Footer1></Footer1>
                <div className="linea3"></div>

            </div>
        </>
    )
}


export default Footer;