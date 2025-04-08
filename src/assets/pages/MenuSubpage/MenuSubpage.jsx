import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import sanityClient from "/src/client.js";

import { getFileSource } from "../../utils/getFileSource";

export default function MenuSubpage() {
  const { slug } = useParams();
  console.log(slug, "slug");

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
      .then((data) => setMenu(data))
      .catch(console.error);
  }, []);

  if (!menus) return <p>Loading...</p>; // Early return if data is undefined or empty

  const currentMenu = menus.find((menu) => menu.slug.current === slug);
  console.log(currentMenu, "currentMenu");
  return (
    <div>
      <iframe
        src={`https://docs.google.com/viewer?url=${getFileSource(currentMenu.pdf).src}&embedded=true`}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
