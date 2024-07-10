/*contenitore di tutti i componenti che formano il footer */
import "../../Style/stile_componenti_footer/Footer.css";
import AboutFooter from "./AboutFooter";
import Contatti from "./Contatti";
import Copyright from "./Copyright";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import IconeFooter from "./IconeFooter";


function Footer(){
    return(
        <>
            <div className="footer">
                <Footer1></Footer1>
                <div className="linea3"></div>
                <div className="colonneFooter">
                    <Footer2
                    titolo="Pagine"
                    collegamento="/home"
                    testo="Home"
                    collegamento1="/materiale"
                    testo1="Materiale"
                    collegamento2="/blog"
                    testo2="Blog"
                    collegamento3="/accedi"
                    testo3="Accedi"
                    
                    >

                    </Footer2>


                    <Footer2
                    titolo="Servizi"
                    collegamento="/elementari"
                    testo="Elementari"
                    collegamento1="/scuoladiprimogrado"
                    testo1="Scuola di primo grado"
                    collegamento2="/scuoladisecondogrado"
                    testo2="Scuola di secondo grado"
                    collegamento3="/universita"
                    testo3="Universita"
                    >

                    </Footer2>


                    {/* altre due colonne del footer da inserire */}
                    <Contatti></Contatti>
                    <div className="colonnaAbout">
                        <AboutFooter></AboutFooter>
                        <IconeFooter></IconeFooter>
                    </div>
                </div>


                {/* ultima parte del footer va inserita qui */}

                <Copyright></Copyright>
            </div>
        </>
    )
}


export default Footer;