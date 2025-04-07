import React, { useState, useEffect } from "react";

import { Document, Page } from "react-pdf";

import sanityClient from "/src/client.js";

import { getFileSource } from "../../utils/getFileSource";

export default function Menu() {
  const [menu, setMenu] = useState(false);
  const [numPages, setNumPages] = useState(10);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="menu"]{
        pdf
      }`
      )
      .then((data) => setMenu(data[0]))
      .catch(console.error);
  }, []);

  if (!menu || !menu.pdf) return null;

  console.log(getFileSource(menu.pdf).src);

  function onDocumentLoadSuccess({ numPages }) {
    console.log("loaded!");
    setNumPages(numPages);
  }

  return (
    // <div>
    //   <Document file="/assets/media/menu.pdf">
    //     {Array.from(new Array(numPages), (el, index) => (
    //       <Page key={`page_${index + 1}`} pageNumber={index + 1} />
    //     ))}
    //   </Document>
    // </div>
    <div>
      <iframe
        src={`https://docs.google.com/viewer?url=${getFileSource(menu.pdf).src}&embedded=true`}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
