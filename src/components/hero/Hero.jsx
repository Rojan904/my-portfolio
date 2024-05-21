import React from "react";
import "./hero.scss";
import { animate, motion } from "framer-motion";
const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2>ROJAN SHRESTHA</motion.h2>
          <motion.h1>Flutter Developer</motion.h1>
          <motion.div className="buttons">
            <motion.button>See the latest works</motion.button>
            <motion.button>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariant}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <motion.div
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          className="slidingContainer"
        >
          Writer Content Creator Influencer
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
