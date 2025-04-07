import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../Servizi.module.css";

export default function ImageSwipe({ text, source, index, description }) {
  const textRef = useRef();
  const imageRef = useRef();

  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [textWidth, setTextWidth] = useState();
  let [imageWidth, setImageWidth] = useState(800);

  let isEven = index % 2 == 0;

  const transitionSpeed = { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] };

  useEffect(() => {
    setTextWidth(textRef.current.getBoundingClientRect().width);
    console.log("updated");
  }, [textRef.current]);

  const updateSizes = () => {
    if (textRef.current && imageRef.current) {
      setTextWidth(textRef.current.getBoundingClientRect().width);
      setImageWidth(imageRef.current.getBoundingClientRect().width);
      setWindowWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    console.log(textWidth, "textWidth");
  }, [textWidth]);

  useEffect(() => {
    function handleResize() {
      updateSizes();
    }

    window.addEventListener("resize", handleResize);
    updateSizes(); // Initial calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (textRef.current) {
        setTextWidth(textRef.current.getBoundingClientRect().width);
        setImageWidth(800);
      }
    });
  }, []);

  const imageVariants = {
    initial: {
      x: isEven ? -790 : windowWidth - 10,
      transition: transitionSpeed,
    },
    animate: {
      x: isEven ? -textWidth + windowWidth - imageWidth - 40 : windowWidth - (windowWidth - textWidth) + 40,
      transition: transitionSpeed,
    },
  };

  const textVariants = {
    initial: {
      x: "calc(50vw - 50%)",
      transition: transitionSpeed,
    },
    animate: {
      x: isEven ? windowWidth - textWidth - 20 : 20,
      transition: transitionSpeed,
    },
    exit: {
      x: "calc(50vw - 50%)",
      transition: transitionSpeed,
    },
  };

  function splitText(text) {
    const words = text.split(" ");
    let result = [];
    let currentLine = "";
    let currentLength = 0;

    words.forEach((word, index) => {
      if (currentLength + word.length + (currentLine ? 1 : 0) <= 11) {
        // Append word to the current line (with space if not first word)
        currentLine += (currentLine ? " " : "") + word;
        currentLength += word.length + (currentLine ? 1 : 0);
      } else {
        // Push the current line to the result
        if (currentLine) result.push(currentLine);

        // Start a new line with the current word
        currentLine = word;
        currentLength = word.length;
      }
    });

    // Push the last accumulated line
    if (currentLine) result.push(currentLine);

    // Return the formatted JSX
    return result.map((line, index) => <h1 key={index}>{line}</h1>);
  }

  return (
    <AnimatePresence>
      <motion.div
        className={styles.container}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ margin: "-200px 0px -100px 0px" }}
      >
        <motion.div ref={imageRef} className={styles["image-container"]} variants={imageVariants}>
          <img src={source.src} alt="" />
        </motion.div>

        <motion.div ref={textRef} className={styles["text-wrapper"]} variants={textVariants}>
          <div className={styles.titleContainer}>{splitText(text)}</div>

          <div className={styles["information-wrapper"]}>
            <p className={styles.description}>{description}</p>
            {/* <Link to="/menu" className="arrow-link">
              <ArrowRight color="#D46942" />
              <span> VAI AL MENU</span>
            </Link> */}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
