import React, { useState, useEffect, useRef, useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Footer() {
  const { data } = useContext(DataContext);
  if (!data) return;

  return (
    <footer>
      <img className="logo" src="/assets/logo/BAHAR_LOGO_beige.svg" alt="logo" />

      <div className="footer-info">
        <div className="address">{data.address}</div>

        <div className="contact">
          <div className="cell">CELL {data.telephone}</div>

          <a
            href="https://www.facebook.com/profile.php?id=61573744333759&mibextid=wwXIfr&rdid=AzR06cyUTr4HDgWK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15q2AUYVhT%2F%3Fmibextid%3DwwXIfr"
            target="_blank"
            className="facebook"
          >
            FB {data.facebook}
          </a>
          <a href={`https://www.instagram.com/${data.instagram}`} target="_blank" className="instagram">
            IG {data.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}
