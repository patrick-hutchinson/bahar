import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul>
        <li>SERVIZI</li>
        <li>MENU</li>
        <li>GALLERY</li>
        <li>CONTATTI</li>
      </ul>
      <Link to="/">
        <img className="logo" src="/assets/logo/BAHAR_LOGO_beige.svg" alt="logo" />
      </Link>
      <div className="lang">
        <button href="">ITA</button>/<button href="">ENG</button>
      </div>
    </header>
  );
}
