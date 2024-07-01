import "../Style/stile_pagine/Home.css";
import NavMenu from "../components/componenti_navbar/NavMenu";
import NavLuna from "../components/componenti_navbar/NavLuna";
import Main from "../components/componenti_main/Main";

function Home() {
  return (
    <>
      <NavMenu />
      <div className="navLuna">
        <NavLuna/>
      </div>

      <Main></Main>

    </>
  );
}

export default Home;
