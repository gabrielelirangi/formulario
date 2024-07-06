import "../../Style/stile_componenti_footer/IconeFooter.css";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";

function IconeFooter() {
  return (
    <>
      <div className="iconeFooterContenitore">
        <div className="iconaFooter">
          <Facebook className="social"></Facebook>
        </div>
        <div className="iconaFooter">
          <Twitter className="social"></Twitter>
        </div>
        <div className="iconaFooter">
          <Linkedin className="social"></Linkedin>
        </div>
        <div className="iconaFooter">
          <Instagram className="social"></Instagram>
        </div>
      </div>
    </>
  );
}

export default IconeFooter;
