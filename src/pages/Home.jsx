import "../Style/stile_pagine/Home.css";
import NavMenu from "../components/componenti_navbar/NavMenu";
import NavLuna from "../components/componenti_navbar/NavLuna";

function Home() {
  return (
    <>
      <NavMenu />
      <div className="navLuna">
        <NavLuna/>
      </div>
    </>
  );
}

export default Home;
