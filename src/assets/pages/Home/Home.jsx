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
      <div className={styles.banner}>
        <h1>{data.bannerText}</h1>
      </div>
      <div className={styles["text-section"]}>
        <h2>{data.introText}</h2>
      </div>
      <Servizi />
      {/* <Menu /> */}
      <Gallery />
      <div className={styles["address-container"]}>
        <h2 className="subheading">TROVACI</h2>
        <h2>LUNgOMArE AndrEA dOriA, 97010 MAriNA di rAgUSA</h2>
      </div>
      <div className={styles["image-container"]}>
        <img src="/assets/media/ac12418a1b974ec36c77647b440c51e8.jpeg" alt="" />
      </div>
      <a href="#" className={styles["menu-link"]}>
        <ArrowRight color="#f00" />
        <span>INDICAZIONI</span>
      </a>
    </div>
  );
}
