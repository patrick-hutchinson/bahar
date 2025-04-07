import React, { useState, useEffect, useRef, useContext } from "react";

import { DataContext } from "../../context/DataContext";
import styles from "./Home.module.css";

// Components
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import Servizi from "./components/Servizi/Servizi";
import ArrowRight from "../../components/elements/ArrowRight";
import { getFileSource } from "../../utils/getFileSource";

export default function Home() {
  const { language } = useContext(DataContext);
  const { data } = useContext(DataContext);

  if (!data) return <p>Loading...</p>;

  function findTranslation(object) {
    let translation = object.find((item) => item._key === language);

    return translation.value;
  }

  return (
    <div>
      <section className={styles["banner-container"]}>
        <img className={styles["banner-image"]} src={getFileSource(data.bannerImage).src} alt="" />
        <h1>{findTranslation(data.bannerText)}</h1>
      </section>
      <section className={styles["tagline-container"]}>
        <h2>{findTranslation(data.introText)}</h2>
      </section>
      <section className="servizi" id="servizi">
        <Servizi />
      </section>
      {/* <Menu /> */}
      <section className="gallery" id="gallery">
        <Gallery />
      </section>
      <section className={styles["address-container"]}>
        <h2 className="subheading">TROVACI</h2>
        <p>LUNgOMArE AndrEA dOriA, 97010 MAriNA di rAgUSA</p>
      </section>
      <section className={styles["image-container"]}>
        <img src="/assets/media/ac12418a1b974ec36c77647b440c51e8.jpeg" alt="" />
      </section>
      <section className={`${styles["contact-container"]} contatti`}>
        <a href="#" className="arrow-link">
          <ArrowRight color="#D46942" />
          <span>INDICAZIONI</span>
        </a>

        <div className={styles.contact}>
          <h2 className="subheading">CONTATTI</h2>
          <div className={styles["contact-details"]}>
            <div>CELL {data.telephone}</div>
            <a
              href="https://www.facebook.com/profile.php?id=61573744333759&mibextid=wwXIfr&rdid=AzR06cyUTr4HDgWK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15q2AUYVhT%2F%3Fmibextid%3DwwXIfr"
              target="_blank"
            >
              FB {data.facebook}
            </a>
            <a href={`https://www.instagram.com/${data.instagram}`} target="_blank">
              IG {data.instagram}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
