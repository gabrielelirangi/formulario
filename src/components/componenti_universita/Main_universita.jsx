import Card from "../componenti_main/Card";



function Main_universita() {

    const datiUniversita = [
        {
            img:"data:image/jpeg;base64,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",
            alt:"logo algebra lineare",
            titolo:"Algebra Lineare",
            descrizione:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            collegato:"",
            className:"scrollbar altezza"

        },
        {
            img:"data:image/jpeg;base64,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",
            alt:"logo analisi matematica",
            titolo:"Analisi Matematica",
            descrizione:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            collegato:"",
            className:"scrollbar altezza"

        }
    ]

    return (
        <>
            <div className="main_elementare">

                {datiUniversita.map((dati_universita, index) => (
                    <Card
                        key={index}
                        img={dati_universita.img}
                        alt={dati_universita.alt}
                        titolo={dati_universita.titolo}
                        descrizione={dati_universita.descrizione}
                        collegato={dati_universita.collegato}
                        className={dati_universita.className}


                    />
                ))}

            </div>
        </>
    )
}




export default Main_universita;