import React, { useState, useEffect, useRef } from "react";
import styles from "./Menu.module.css";
import ArrowRight from "../../../../components/elements/ArrowRight";

import { motion } from "framer-motion";
import MaskArrow from "../../../../components/animations/MaskArrow";

export default function Menu() {
  let sections = [
    { name: "SECTION ONE", content: "This is the dummy content for SECTION ONE" },
    { name: "SECTION TWO", content: "This is the dummy content for SECTION TWO" },
    { name: "SECTION THREE", content: "This is the dummy content for SECTION THREE" },
  ];

  function handleExpand(e) {
    let menuSection = e.currentTarget.querySelector(`.${styles["menu-section-content"]}`);
    let isActive = menuSection.classList.contains(styles.active);
    !isActive ? expandElement(menuSection) : collapseElement(menuSection);
  }

  function expandElement(menuSection) {
    menuSection.classList.add(styles.active);
    menuSection.style.maxHeight = menuSection.scrollHeight + "px";
  }
  function collapseElement(menuSection) {
    menuSection.classList.remove(styles.active);
    menuSection.style.maxHeight = "0px";
  }

  return (
    <div className={styles["menu-container"]}>
      <h2 className="subheading">MENU</h2>

      <ul className={styles.menu}>
        {sections.map((section, index) => {
          return (
            <li className={styles["menu-section"]} onClick={(e) => handleExpand(e)} key={index}>
              <div className={styles["menu-title-wrapper"]}>
                <MaskArrow color="#d46943" />
                <h1>{section.name}</h1>
              </div>
              <div className={styles["menu-section-content"]}>{section.content}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
