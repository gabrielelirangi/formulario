import "../Style/stile_pagine/Home.css";
import NavMenu from "../components/componenti_navbar/NavMenu";
import NavLuna from "../components/componenti_navbar/NavLuna";
import Main from "../components/componenti_main/Main";
import Footer from "../components/componenti_footer/Footer";
import Storia from "../components/componenti_main/Storia";

function Home() {
  return (
    <>
      <NavMenu />
      <div className="navLuna">
        <NavLuna/>
      </div>

      <Main></Main>
      <Storia></Storia>

      <Footer></Footer>

    </>
  );
}

export default Home;
