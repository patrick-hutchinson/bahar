import React, { useEffect, useState, useRef } from "react";
import styles from "./Landingpage.module.css";

export default function Landingpage() {
  return (
    <div className={styles["page-wrapper"]}>
      <div>IN ARRIVO A MARINA DI RAGUSA UN NUOVO ORIZZONTE DI GUSTO E RELAX</div>

      <div className={styles["logo-container"]}>
        <img src="assets/logo/BAHAR_LOGO.svg" alt="" />
      </div>

      <footer>
        <div>
          LUNGOMARE ADREA DORIA, <br />
          97010 MARINA DI RAGUSA
        </div>

        <div className="socials">
          <a href="https://www.instagram.com/bahar__marina/" target="_blank">
            IG
          </a>
          / <a href="#">FB</a>
        </div>

        <div>
          PER MAGGIORI INFO CONTATTACI <br />
          <a href="mailto:info@baharmarina.it"> INFO@BAHARMARINA.IT</a>
        </div>
      </footer>
    </div>
  );
}
