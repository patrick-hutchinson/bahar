import React, { useState, useEffect, useRef, useContext } from "react";
import { DataContext } from "../../../../context/DataContext";

import { Link } from "react-router-dom";

import ArrowRight from "../../../../components/elements/ArrowRight";

import styles from "./MenuPreview.module.css";
import ImageSwipe from "./ImageSwipe/ImageSwipe";

export default function MenuPreview() {
  const { data } = useContext(DataContext);
  const { isMobile } = useContext(DataContext);

  if (!data) return <p>Loading...</p>;

  return data.sections.map((section, index) => {
    return !isMobile ? (
      <ImageSwipe
        key={index}
        text={section.sectionTitle}
        source="/assets/media/ac12418a1b974ec36c77647b440c51e8.jpeg"
        index={index}
        description={section.sectionDescription}
      />
    ) : (
      <div className={styles.container} key={index}>
        <h1>{section.sectionTitle}</h1>
        <div className={styles["image-container"]}>
          <img src="/assets/media/ac12418a1b974ec36c77647b440c51e8.jpeg" alt="" />
        </div>

        <p className={styles.description}>{section.sectionDescription}</p>

        <Link to="/menu" className={styles["menu-link"]}>
          <ArrowRight color="#f00" />
          <span> VAI AL MENU</span>
        </Link>
      </div>
    );
  });
}
