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
          <div className="contact-item-wrapper">
            <div>CELL</div> <div>{data.telephone}</div>
          </div>

          <a
            href="https://www.facebook.com/profile.php?id=61573744333759&mibextid=wwXIfr&rdid=AzR06cyUTr4HDgWK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15q2AUYVhT%2F%3Fmibextid%3DwwXIfr"
            target="_blank"
            className="facebook"
          >
            <div className="contact-item-wrapper">
              <div>FB</div> <div>{data.facebook}</div>
            </div>
          </a>

          <a href={`https://www.instagram.com/${data.instagram}`} target="_blank" className="instagram">
            <div className="contact-item-wrapper">
              <div>IG</div>
              <div>{data.instagram}</div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
