import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function Header() {
  const { isMobile } = useContext(DataContext);
  function handleMenu(e) {
    let menuItem = e.currentTarget.innerText.toLowerCase();
    let targetSection = document.querySelector(`section.${menuItem}`);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header>
      {!isMobile && (
        <ul>
          <li onClick={(e) => handleMenu(e)}>SERVIZI</li>
          {/* <li onClick={()=>handleMenu()}>MENU</li> */}
          <li onClick={(e) => handleMenu(e)}>GALLERY</li>
          <li onClick={(e) => handleMenu(e)}>CONTATTI</li>
        </ul>
      )}
      <Link to="/">
        <img className="logo" src="/assets/logo/BAHAR_LOGO_beige.svg" alt="logo" />
      </Link>

      {!isMobile && (
        <div className="lang">
          <button href="">ITA</button>/<button href="">ENG</button>
        </div>
      )}
    </header>
  );
}
