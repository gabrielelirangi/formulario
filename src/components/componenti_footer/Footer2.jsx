/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "../../Style/stile_componenti_footer/Footer2.css";
import { ChevronRight } from "lucide-react";

function Footer2({
  titolo,
  collegamento,
  collegamento1,
  collegamento2,
  collegamento3,
  testo,
  testo1,
  testo2,
  testo3,
}) {
  return (
    <>
      <div className="footer2">
        <h3>{titolo}</h3>
        <div className="footer2box">
          <div className="boxIconaLink">
            <ChevronRight color="#00bfff" className="iconaFooter2" />
            <Link to={collegamento}  className="linkFooter2">
              {testo}
            </Link>
          </div>
          <div className="boxIconaLink">
            <ChevronRight color="#00bfff" className="iconaFooter2"/>
            <Link to={collegamento1} className="linkFooter2">
              {testo1}
            </Link>
          </div>
          <div className="boxIconaLink">
            <ChevronRight color="#00bfff" className="iconaFooter2"/>
            <Link to={collegamento2} className="linkFooter2">
              {testo2}
            </Link>
          </div>
          <div className="boxIconaLink">
            <ChevronRight color="#00bfff" className="iconaFooter2"/>
            <Link to={collegamento3} className="linkFooter2">
              {testo3}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer2;
