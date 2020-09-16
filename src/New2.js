import React from "react";
import { motion } from "framer-motion";

function New2() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      style={{ backgroundColor: "red" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>David</h1>
      <h1>David</h1>
      <h1>David</h1>
      <h1>David</h1>
      <h1>David</h1>
      <h1>David</h1>
      <h1>David</h1>
      <h1>David</h1>
      <h1>David</h1>
    </motion.div>
  );
}

export default New2;
