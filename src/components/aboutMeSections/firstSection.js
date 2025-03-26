import React, { useState, useEffect } from "react";
import classes from "./aboutMeSections.module.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animation1 from "../../../public/assets/about_me/animation1.json";
import { useInView } from "react-intersection-observer";

function FirstSection() {
  const [isAnimationComplete, setAnimationComplete] = useState(false);
  const [isLottiePlaying, setLottiePlaying] = useState(false);
  const [hideLottie, setHideLottie] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setHideLottie(true);
    } else {
      setHideLottie(false);
      setAnimationComplete(false);
      setLottiePlaying(false);
    }
  }, [inView]);

  useEffect(() => {
    if (isAnimationComplete && !isLottiePlaying) {
      setLottiePlaying(true);
    }
  }, [isAnimationComplete, isLottiePlaying]);


  const headingVariants = {
    offscreen: {
      y: -150,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: "circOut",
        duration: 1.2,
      },
    },
  };

  const textAnimation = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.8,
      },
    },
  };

  const handleAnimationComplete = () => {
    setAnimationComplete(true); // Set the state to true when Framer Motion animation completes
  };

  return (
    <motion.section
      ref={ref}
      style={{ flexDirection: "column" }}
      className={classes.section}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.h2 variants={headingVariants} className={classes.big_heading}>
        About Me?
      </motion.h2>

      <motion.p variants={textAnimation} className={classes.aboutme_text}>
        I love making cool looking tech to improve user retention on your
        platform, find out more...
      </motion.p>

      <div
        style={{
          height: "200px",
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        {isLottiePlaying && hideLottie && (
          <Lottie
            animationData={animation1}
            style={{ width: "200px", height: "200px", rotate: "-150deg" }}
            autoplay={isLottiePlaying}
            loop={false}
          />
        )}
      </div>
    </motion.section>
  );
}

export default FirstSection;
