import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../Servizi.module.css";

export default function ImageSwipe({ text, source, index, description }) {
  const textRef = useRef();
  const imageRef = useRef();

  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [textWidth, setTextWidth] = useState(0);
  let [imageWidth, setImageWidth] = useState(800);

  let isEven = index % 2 === 0;

  const transitionSpeed = { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] };

  const updateSizes = () => {
    if (textRef.current && imageRef.current) {
      setTextWidth(textRef.current.getBoundingClientRect().width);
      setImageWidth(imageRef.current.getBoundingClientRect().width);
      setWindowWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    updateSizes(); // Initial calculation
  }, []);

  useEffect(() => {
    function handleResize() {
      updateSizes();
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(textWidth, "textWidth");
  }, [textWidth]);

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
        currentLine += (currentLine ? " " : "") + word;
        currentLength += word.length + (currentLine ? 1 : 0);
      } else {
        if (currentLine) result.push(currentLine);
        currentLine = word;
        currentLength = word.length;
      }
    });

    if (currentLine) result.push(currentLine);

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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
