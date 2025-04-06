import React, { useState, useEffect, useRef, useContext } from "react";

import ArrowLeft from "../../../../components/elements/ArrowLeft";
import ArrowRight from "../../../../components/elements/ArrowRight";

import { DataContext } from "../../../../context/DataContext";

import styles from "./Gallery.module.css";
import { getFileSource } from "../../../../utils/getFileSource";

export default function Gallery() {
  const { data } = useContext(DataContext);
  const galleryRef = useRef();
  function handlePan(direction) {
    const gallery = galleryRef.current;
    const scrollAmount = 500;

    if (!gallery) return;

    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
    const currentScrollLeft = gallery.scrollLeft;

    if (direction === "right" && currentScrollLeft < maxScrollLeft) {
      const distance = Math.min(scrollAmount, maxScrollLeft - currentScrollLeft);
      gallery.scrollBy({ left: distance, behavior: "smooth" });
    } else if (direction === "left" && currentScrollLeft > 0) {
      const distance = Math.min(scrollAmount, currentScrollLeft);
      gallery.scrollBy({ left: -distance, behavior: "smooth" });
    }
  }

  return (
    <div className={styles["gallery-container"]}>
      <h2 className="subheading">GALLERY</h2>
      <div className={styles["gallery-wrapper"]}>
        <div ref={galleryRef} className={styles.gallery}>
          {data.gallery.map((image, index) => {
            return <img src={getFileSource(image).src} key={index}></img>;
          })}
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
