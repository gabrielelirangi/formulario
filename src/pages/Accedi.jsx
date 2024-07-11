// pagina accedi, anche qui verra' implementato il backend, implementazione che verra' fatta piu avanti
import Form from "../components/forms/Form";

function Accedi(){
    const datiFormAccedi = [
        {
          titolo: "ACCEDI",
          testoBenvenuto: "Ti diamo il benvenuto su Einstein-Formulary!",
          placeholder: "inserisci il tuo nickname",
          bottone: "Accedi",
          home: "/",
          accedi:"/registrati",
          testo:"Accedi"
        },
      ];

    return(
        <>
            {datiFormAccedi.map((datiAccedi, index) => (
        <Form
          key={index}
          titolo={datiAccedi.titolo}
          testoBenvenuto={datiAccedi.testoBenvenuto}
          placeholder={datiAccedi.placeholder}
          bottone={datiAccedi.bottone}
          home={datiAccedi.home}
          accedi={datiAccedi.accedi}
          testo={datiAccedi.testo}
        />
      ))}

        </>
    )
}


export default Accedi;