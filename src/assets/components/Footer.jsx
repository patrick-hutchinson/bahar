import React, { useState, useEffect, useRef, useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Footer() {
  const { data } = useContext(DataContext);
  if (!data) return;

  return (
    <footer>
      {/* <img className="logo" src="/assets/logo/BAHAR_LOGO_beige.svg" alt="logo" /> */}
      <div className="address">{data.address}</div>

      <div className="contact">
        <div className="cell">{data.telephone}</div>
        <div className="facebook">{data.facebook}</div>
        <div className="instagram">{data.instagram}</div>
      </div>
    </footer>
  );
}
