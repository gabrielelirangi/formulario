/*
 react-router-dom libreria che gestisce le rotte nell'applicazione react
 createBrowserRouter crea un oggetto router che tiene traccia dello stato della navigazione all'interno dell'applicazione. 
 gestisce le rotte e permette di renderizzare i componenti correnti in base all'url corrente. accetta un array di oggetti che rappresentano 
 le rotte, ciascuna mappata a un determinato percorso url e al componente da renderizzzare quando quel percorso viene richiesto.
 routerprovider e' un componete che fornisce il contesto per i componenti figlio per accedere al router creato tramite createBrowserRouter. 
 il suo scopo e' quello di rendere il router disponibile a tutti i componenti figlio senza dover passare il router come prop ad ogni 
 componente 
*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ScuolaElementare from './pages/ScuolaElementare';
import Materiale from './pages/Materiale';
import ScuolaMedia from './pages/ScuolaMedia';
import ScuolaSuperiore from './pages/ScuolaSuperiore';
import Universita from './pages/Universita';
import ScrollToTop from './components/componenti_logica/ScrollToTop';
import Error from './pages/Error';
import Registrati from './pages/Registrati';
import Accedi from './pages/Accedi';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materiale" element={<Materiale />} />
        <Route path="/scuolaelementare" element={<ScuolaElementare />} />
        <Route path="/scuoladiprimogrado" element={<ScuolaMedia />} />
        <Route path="/scuoladisecondogrado" element={<ScuolaSuperiore />} />
        <Route path="/universita'" element={<Universita />} />
        <Route path="*" element={<Error/>}/>
        <Route path="/registrati" element={<Registrati/>}/>
        <Route path="/accedi" element={<Accedi/>}/>
      </Routes>
    </Router>
  );
}

export default App;

