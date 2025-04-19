import React, { useState, useEffect } from "react";

import { Document, Page } from "react-pdf";

import sanityClient from "/src/client.js";

import styles from "./Menu.module.css";

import MaskArrow from "../../components/animations/MaskArrow";

import { getFileSource } from "../../utils/getFileSource";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menus, setMenu] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="menu"]{
          pdf,
          title,
          slug
        }`
      )
      .then((data) => {
        const customOrder = ["COLAZIONE", "APERITIVO", "DRINK LIST", "RISTORANTE", "CARTA DEI VINI"];

        const sorted = data.sort((a, b) => {
          return customOrder.indexOf(a.title.toUpperCase()) - customOrder.indexOf(b.title.toUpperCase());
        });

        setMenu(sorted);
      })
      .catch(console.error);
  }, []);

  if (!menus) return null;

  console.log(menus, "menus");

  return (
    <div className={styles["menu-wrapper"]}>
      <h2 className="subheading">MENU</h2>

      <ul className={styles.menu}>
        {menus.map((menu) => {
          return (
            <Link to={`/menu/${menu.slug.current}`}>
              <li className={styles["menu-section"]}>
                <div className={styles["menu-title-wrapper"]}>
                  <MaskArrow color="#d46943" />
                  <h1>{menu.title}</h1>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
