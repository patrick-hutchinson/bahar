import React, { useEffect, useState, useRef } from "react";
import styles from "./Landingpage.module.css";

export default function Landingpage() {
  return (
    <div className={styles["page-wrapper"]}>
      <div className={`${styles["header-text"]} ss01`}>
        IN ARRIVO A <span className="ss00">M</span>ARINA DI RAGUSA UN NUOVO ORIZZONTE DI
        <span className="ss00"> GU</span>
        STO E RELAX
      </div>

      <div className={styles["logo-container"]}>
        <img src="assets/logo/BAHAR_LOGO.svg" alt="" />
      </div>

      <footer className={styles["landingpage-footer"]}>
        <div>
          LUNGOMARE ANDREA DORIA, <br />
          97010 MARINA DI RAGUSA
        </div>

        <div className="socials ss01">
          <a href="https://www.instagram.com/bahar__marina/" target="_blank">
            IG
          </a>
          &nbsp;/&nbsp;
          <a
            href="https://www.facebook.com/profile.php?id=61573744333759&mibextid=wwXIfr&rdid=AzR06cyUTr4HDgWK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15q2AUYVhT%2F%3Fmibextid%3DwwXIfr"
            target="_blank"
          >
            FB
          </a>
        </div>

        <div>
          PER MAGGIORI INFO CONTATTACI <br />
          <a href="mailto:info@baharmarina.it"> INFO@BAHARMARINA.IT</a>
        </div>
      </footer>
    </div>
  );
}
