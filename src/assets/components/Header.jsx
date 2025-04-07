import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import sanityClient from "/src/client.js";

export default function Header() {
  const navigate = useNavigate();
  const { isMobile } = useContext(DataContext);
  const [page, setPage] = useState();
  const { language, setLanguage } = useContext(DataContext);
  const location = useLocation();

  const [menuItem, setMenuItem] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="setup"]{
        navigationMenu,
          menuButton,  
      }`
      )
      .then((page) => setPage(page[0]))
      .catch(console.error);
  }, []);

  // Scroll to section when the route changes
  useEffect(() => {
    if (menuItem) {
      let targetSection = document.querySelector(`section.${menuItem}`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, menuItem]); // Depend on location and menuItem

  function handleMenu(e) {
    console.log(e.currentTarget.getAttribute("tag"), "tag");
    const sectionTag = e.currentTarget.getAttribute("tag");
    // const selectedMenuItem = e.currentTarget.innerText.toLowerCase();
    setMenuItem(sectionTag);
    navigate("/"); // Navigate to homepage
  }

  useEffect(() => {
    console.log(page, "page");
  }, [page]);

  return (
    <header>
      {!isMobile && (
        <ul>
          <li tag="servizi" onClick={handleMenu}>
            SERVIZI
          </li>
          <Link tag="menu" onClick={handleMenu} to="/menu">
            MENU
          </Link>
          <li tag="gallery" onClick={handleMenu}>
            GALLERY
          </li>
          <li tag="contatti" onClick={handleMenu}>
            CONTATTI
          </li>
        </ul>
      )}
      <Link to="/">
        <img className="logo" src="/assets/logo/BAHAR_LOGO_beige.svg" alt="logo" />
      </Link>

      {!isMobile && (
        <div className="lang">
          <button onClick={() => setLanguage("it")}>ITA</button>/<button onClick={() => setLanguage("en")}>ENG</button>
        </div>
      )}
    </header>
  );
}
