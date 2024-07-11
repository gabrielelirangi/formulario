import { Link } from "react-router-dom";
import "../Style/stile_pagine/Error.css";


function Error() {
  return (
    <>
      <div  className="pageError">
        <div className="imgError">


            <Link to="/" className="collegamentoError">Torna alla home</Link>
        </div>
      </div>
    </>
  );
}


export default Error;