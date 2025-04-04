import React, { useState, useEffect, useRef } from "react";

import ArrowLeft from "../../../../components/elements/ArrowLeft";
import ArrowRight from "../../../../components/elements/ArrowRight";

import styles from "./Gallery.module.css";

export default function Gallery() {
  const galleryRef = useRef();
  function handlePan(direction) {
    galleryRef.current.scrollBy({
      left: direction === "right" ? 500 : -500,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles["gallery-container"]}>
      <h2 className="subheading">GALLERY</h2>
      <div className={styles["gallery-wrapper"]}>
        <div ref={galleryRef} className={styles.gallery}>
          <img src="/assets/media/ac12418a1b974ec36c77647b440c51e8.jpeg" alt="" />
          <img src="/assets/media/ac12418a1b974ec36c77647b440c51e8.jpeg" alt="" />
          <img src="/assets/media/ac12418a1b974ec36c77647b440c51e8.jpeg" alt="" />
        </div>
        <div className={styles["gallery-navigation"]}>
          <span onClick={() => handlePan("left")}>
            <ArrowLeft color="#F5F1ED" />
          </span>
          <span onClick={() => handlePan("right")}>
            <ArrowRight color="#F5F1ED" />
          </span>
        </div>
      </div>
    </div>
  );
}
