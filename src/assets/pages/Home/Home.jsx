import React, { useState, useEffect, useRef, useContext } from "react";

import { DataContext } from "../../context/DataContext";
import styles from "./Home.module.css";

// Components
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import Servizi from "./components/Servizi/Servizi";
import ArrowRight from "../../components/elements/ArrowRight";

export default function Home() {
  const { data } = useContext(DataContext);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <section className={styles["banner-container"]}>
        <h1>{data.bannerText}</h1>
      </section>
      <section className={styles["tagline-container"]}>
        <h2>{data.introText}</h2>
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
            <div>FB {data.facebook}</div>
            <div>IG {data.instagram}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
