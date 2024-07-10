import NavMenu from "../components/componenti_navbar/NavMenu";
import Footer from "../components/componenti_footer/Footer";
import Main_elementare from "../components/componenti_elementari/Main_elementare";

function ScuolaElementare(){
    return(
        <>
            <NavMenu></NavMenu>

            <Main_elementare></Main_elementare>

            <Footer></Footer>
        </>
    )
}


export default ScuolaElementare;