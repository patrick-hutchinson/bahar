import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function Header() {
  const navigate = useNavigate();
  const { isMobile } = useContext(DataContext);
  const location = useLocation();

  const [menuItem, setMenuItem] = useState("");

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
    const selectedMenuItem = e.currentTarget.innerText.toLowerCase();
    setMenuItem(selectedMenuItem);
    navigate("/"); // Navigate to homepage
  }

  return (
    <header>
      {!isMobile && (
        <ul>
          <li onClick={handleMenu}>SERVIZI</li>
          <Link onClick={handleMenu} to="/menu">
            MENU
          </Link>
          <li onClick={handleMenu}>GALLERY</li>
          <li onClick={handleMenu}>CONTATTI</li>
        </ul>
      )}
      <Link to="/">
        <img className="logo" src="/assets/logo/BAHAR_LOGO_beige.svg" alt="logo" />
      </Link>

      {!isMobile && (
        <div className="lang">
          <button>ITA</button>/<button>ENG</button>
        </div>
      )}
    </header>
  );
}
