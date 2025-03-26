import React, { useEffect, useState } from "react";
import classes from "./aboutMeSections.module.css";
import boring from "../../../public/assets/about_me/boring.png";
import cool from "../../../public/assets/about_me/cool.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import animation1 from "../../../public/assets/about_me/animation1.json";
import thumbs_down from "../../../public/assets/why_me_assets/thumbs_down.json";
import thumbs_up from "../../../public/assets/why_me_assets/thumbs_up.json";
import { useWindowSize } from "../../../utils.js";
import { useInView } from "react-intersection-observer";

function WhyMe() {
  const [isAnimationComplete, setAnimationComplete] = useState(false);
  const [hideLottie, setHideLottie] = useState(false);
  const [isLottiePlaying, setLottiePlaying] = useState(false);
  const { width } = useWindowSize();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  console.table(
    "isLottiePlaying: ",
    isLottiePlaying,
    "hideLottie: ",
    hideLottie,
    "inView: ",
    inView
  );

  useEffect(() => {
    if (isAnimationComplete && !isLottiePlaying) {
      console.log("ITS HERE!");
      // setLottiePlaying(true);
    }
  }, [isAnimationComplete, isLottiePlaying]);

  useEffect(() => {
    if (inView) {
      setHideLottie(true);
    } else {
      setHideLottie(false);
      setAnimationComplete(false);
      setLottiePlaying(false);
    }
  }, [inView]);

  const headingVariants = {
    offscreen: {
      y: -5,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: "circOut",
        duration: 0.8,
      },
    },
  };

  const gadgetVariantsLeft = {
    offscreen: {
      x: -200,
    },
    onscreen: {
      x: 0,
      transition: {
        ease: "circOut",
        duration: 0.8,
      },
    },
  };

  const textAnimation = (delay) => ({
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: delay,
      },
    },
  });

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    setLottiePlaying(true);
    console.log("Animation complete");
  };

  return (
    <motion.section
      ref={ref}
      className={classes.why_me_section}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
    >
      <motion.h2 variants={headingVariants} className={classes.small_heading}>
        So lets be honest..
      </motion.h2>

      <motion.p variants={textAnimation(0.7)} className={classes.aboutme_text}>
        For sky-rocketing user retention, YOUR tech solution should transform..
      </motion.p>

      <motion.div className={classes.transform_section}>
        <motion.div
          variants={textAnimation(1.7)}
          onAnimationComplete={handleAnimationComplete}
          onAnimation
          className={classes.boring_div}
        >
          <div
            style={{ top: "-40px", right: "-40px" }}
            className={classes.thumbs_container}
          >
            <Lottie
              animationData={thumbs_down}
              style={{ width: "170px", height: "170px" }}
              autoplay={true}
              loop={true}
            />
          </div>
          <p className={classes.aboutme_text}>From looking like this..</p>
          <img src={boring.src} />
        </motion.div>

        <motion.div className={classes.next_arrow_container}>
          {isLottiePlaying && hideLottie && (
            <Lottie
              animationData={animation1}
              style={{
                width: width < 900 ? "60px" : "130px",
                height: width < 900 ? "60px" : "130px",
                rotate: "150deg",
              }}
              autoplay={isLottiePlaying}
              loop={false}
            />
          )}
        </motion.div>

        <motion.div variants={textAnimation(3.5)} className={classes.cool_div}>
          <div className={classes.thumbs_container}>
            <Lottie
              animationData={thumbs_up}
              style={{ width: "90px", height: "90px" }}
              autoplay={true}
              loop={true}
            />
          </div>

          <p className={classes.aboutme_text}>To something more interesting</p>
          <img src={cool.src} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default WhyMe;
