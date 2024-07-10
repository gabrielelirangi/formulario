import Footer from "../components/componenti_footer/Footer";
import NavMenu from "../components/componenti_navbar/NavMenu";
import Main_superiore from "../components/componenti_superiori/Main_superiore";



function ScuolaSuperiore(){
    return(
        <>
            <NavMenu></NavMenu>

            <Main_superiore></Main_superiore>
            <Footer></Footer>
        </>
    )
}

export default ScuolaSuperiore;