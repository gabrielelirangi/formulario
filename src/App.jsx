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
import Servizi from './pages/Servizi';
import ScuolaElementare from './pages/ScuolaElementare';

function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/Home", element: <Home/>},
    { path: "/servizi", element: <Servizi/>},
    { path: "/scuolaelementare", element: <ScuolaElementare/>},



  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
