import React, { createContext, useState, useEffect } from "react";
import sanityClient from "/src/client.js";
// Create the context
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [page, setPage] = useState();
  const [language, setLanguage] = useState("it");
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768; // Calculate the new value
      setIsMobile(newIsMobile); // Update the state
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="homepage"]{
      bannerImage,
        bannerText,
        introText,
        sections,
        gallery,
        address,
        telephone,
        instagram,
        facebook,
    }`
      )
      .then((data) => setData(data[0]))
      .catch(console.error);
  }, []);

  return (
    <DataContext.Provider value={{ data, isMobile, language, setLanguage, page }}>{children}</DataContext.Provider>
  );
};
