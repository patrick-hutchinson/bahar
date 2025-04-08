import React, { useState, useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import MenuButton from "./elements/MenuButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import { DataContext } from "../context/DataContext";

export default function Layout() {
  const navigate = useNavigate();
  const { isMobile } = useContext(DataContext);

  const { language, setLanguage } = useContext(DataContext);
  const [menuItem, setMenuItem] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const transitionSpeed = { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] };

  const variants = {
    open: {
      x: 0,
      transition: transitionSpeed,
    },
    closed: {
      x: window.innerWidth,
      transition: transitionSpeed,
    },
  };

  function handleMenu(e) {
    setMenuOpen(false);

    const selectedMenuItem = e.currentTarget.innerText.toLowerCase();
    setMenuItem(selectedMenuItem);
    navigate("/"); // Navigate to homepage
  }

  useEffect(() => {
    if (menuItem) {
      let targetSection = document.querySelector(`section.${menuItem}`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", top: 50 });
      }
    }
  }, [location, menuItem]); // Depend on location and menuItem

  const MobileMenuButton = () => {
    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        exit="exit"
        className="mobileMenu-button"
        onClick={() => setMenuOpen(true)}
      >
        <MenuButton />
      </motion.div>
    );
  };

  const MobileMenu = () => {
    return (
      <motion.div
        className="mobileMenu"
        variants={variants}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        exit="closed"
      >
        <div
          className="mobileMenu-close"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          X
        </div>
        <ul>
          <li onClick={handleMenu}>SERVIZI</li>
          {/* <Link onClick={handleMenu} to="/menu">
            MENU
          </Link> */}
          <li onClick={handleMenu}>GALLERY</li>
          <li onClick={handleMenu}>CONTATTI</li>
        </ul>

        <div className="lang">
          <button
            onClick={() => {
              setLanguage("it");
              setMenuOpen(false);
            }}
          >
            ITA
          </button>
          /
          <button
            onClick={() => {
              setLanguage("en");
              setMenuOpen(false);
            }}
          >
            ENG
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div id="content">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isMobile && (
        <div>
          <MobileMenuButton />
          <MobileMenu />
        </div>
      )}
    </div>
  );
}
