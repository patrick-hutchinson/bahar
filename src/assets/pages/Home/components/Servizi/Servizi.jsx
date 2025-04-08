import React, { useState, useEffect, useRef, useContext } from "react";
import { DataContext } from "../../../../context/DataContext";

import { getFileSource } from "../../../../utils/getFileSource";

import { Link } from "react-router-dom";

import ArrowRight from "../../../../components/elements/ArrowRight";

import styles from "./Servizi.module.css";
import ImageSwipe from "./ImageSwipe/ImageSwipe";

export default function Servizi() {
  const { data } = useContext(DataContext);
  const { isMobile } = useContext(DataContext);
  const { language } = useContext(DataContext);

  if (!data) return <p>Loading...</p>;

  function findTranslation(object) {
    let translation = object.find((item) => item._key === language);
    return translation.value;
  }

  return data.sections.map((section, index) => {
    if (!section.showOnHomepage) return null;

    return !isMobile ? (
      <ImageSwipe
        key={index}
        text={findTranslation(section.sectionTitle)}
        source={getFileSource(section.sectionImage)}
        index={index}
        description={findTranslation(section.sectionDescription)}
      />
    ) : (
      <div className={styles.container} key={index}>
        <h1>{findTranslation(section.sectionTitle)}</h1>
        <div className={styles["image-container"]}>
          <img src={getFileSource(section.sectionImage).src} alt="" />
        </div>

        <div className={styles["servizi-text"]}>
          <p className={styles.description}>{findTranslation(section.sectionDescription)}</p>
        </div>
      </div>
    );
  });
}
