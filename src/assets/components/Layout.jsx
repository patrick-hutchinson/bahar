import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";

import MenuButton from "./elements/MenuButton";
import { motion } from "framer-motion";

import Header from "./Header";
import Footer from "./Footer";

import { DataContext } from "../context/DataContext";

export default function Layout() {
  const { isMobile } = useContext(DataContext);
  const [menuOpen, setMenuOpen] = useState(false);

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

    let menuItem = e.currentTarget.innerText.toLowerCase();
    let targetSection = document.querySelector(`section.${menuItem}`);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

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
          <li onClick={handleMenu}>GALLERY</li>
          <li onClick={handleMenu}>CONTATTI</li>
        </ul>

        <div className="lang">
          <button>ITA</button>/<button>ENG</button>
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
