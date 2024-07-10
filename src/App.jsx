/*
 react-router-dom libreria che gestisce le rotte nell'applicazione react
 createBrowserRouter crea un oggetto router che tiene traccia dello stato della navigazione all'interno dell'applicazione. 
 gestisce le rotte e permette di renderizzare i componenti correnti in base all'url corrente. accetta un array di oggetti che rappresentano 
 le rotte, ciascuna mappata a un determinato percorso url e al componente da renderizzzare quando quel percorso viene richiesto.
 routerprovider e' un componete che fornisce il contesto per i componenti figlio per accedere al router creato tramite createBrowserRouter. 
 il suo scopo e' quello di rendere il router disponibile a tutti i componenti figlio senza dover passare il router come prop ad ogni 
 componente 
*/
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 

import './App.css'
import Home from './pages/Home';
import ScuolaElementare from './pages/ScuolaElementare';
import Materiale from './pages/Materiale';
import ScuolaMedia from './pages/ScuolaMedia';
import ScuolaSuperiore from './pages/ScuolaSuperiore';
import Universita from './pages/Universita';

function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/Home", element: <Home/>},
    { path: "/materiale", element: <Materiale/>},
    { path: "/scuolaelementare", element: <ScuolaElementare/>},
    { path: "/scuoladiprimogrado", element: <ScuolaMedia/>},
    { path: "/scuoladisecondogrado", element: <ScuolaSuperiore/>},
    { path: "/universita'", element: <Universita/>},



  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
