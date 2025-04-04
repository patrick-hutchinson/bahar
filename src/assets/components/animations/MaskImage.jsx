import { motion } from "framer-motion";

export default function MaskImage({ source }) {
  let variants = {
    initial: { x: "-95%" },
    animate: {
      x: "-50%",
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
    exit: {
      x: "-95%",
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <motion.img
      initial="initial"
      whileInView="animate"
      exit="exit"
      variants={variants}
      viewport={{ margin: "-200px 0px -100px 0px" }}
      src={source}
      alt="menu section image"
    />
  );
}
