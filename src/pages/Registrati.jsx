//pagina registrazione

// da modificare per poter usare il backend , implementazione che verra' fatta piu avanti

import Form from "../components/forms/Form";

function Registrati() {
  const datiFormRegestrazione = [
    {
      titolo: "REGISTRATI",
      testoBenvenuto: "Ti diamo il benvenuto su Einstein-Formulary!",
      placeholder: "inserisci il tuo nickname",
      bottone: "Registrati",
      home: "/",
      accedi:"/accedi",
      testo:"Accedi"
    },
  ];
  return (
    <>
      {datiFormRegestrazione.map((datiRegistrazione, index) => (
        <Form
          key={index}
          titolo={datiRegistrazione.titolo}
          testoBenvenuto={datiRegistrazione.testoBenvenuto}
          placeholder={datiRegistrazione.placeholder}
          bottone={datiRegistrazione.bottone}
          home={datiRegistrazione.home}
          accedi={datiRegistrazione.accedi}
          testo={datiRegistrazione.testo}
        />
      ))}
    </>
  );
}

export default Registrati;
