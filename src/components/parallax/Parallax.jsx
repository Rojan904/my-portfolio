import React, { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = ({ type }) => {
  const ref = useRef(); //for refering to div
  const { scrollYProgress } = useScroll({
    //scrolling part that targets div
    target: ref,
    offset: ["start start", "end start"],
  }); //when we are at start of the section, the postion is 0 and when we are at the end of the section, it is 200%. this is way to control the speed
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]); //for moving the text from top to bottom 'paralax effect'
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); //for moving the text from top to bottom 'paralax effect'
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
