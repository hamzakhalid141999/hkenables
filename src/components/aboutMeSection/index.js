import React, { useState, useEffect } from "react";
import classes from "./aboutMe.module.css";
import github from "../../../public/assets/aboutme_section_assets/github.svg";
import ai from "../../../public/assets/aboutme_section_assets/ai.svg";
import aws from "../../../public/assets/aboutme_section_assets/aws.svg";
import dart from "../../../public/assets/aboutme_section_assets/dart.svg";
import figma from "../../../public/assets/aboutme_section_assets/figma.svg";
import js from "../../../public/assets/aboutme_section_assets/js.svg";
import metamask from "../../../public/assets/aboutme_section_assets/metamask.svg";
import next from "../../../public/assets/aboutme_section_assets/next.svg";
import psd from "../../../public/assets/aboutme_section_assets/psd.svg";
import react from "../../../public/assets/aboutme_section_assets/react.svg";
import ts from "../../../public/assets/aboutme_section_assets/ts.svg";
import graph from "../../../public/assets/aboutme_section_assets/graphql.svg";
// import { useTheme } from "../../contextAPI";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Marquee from "react-fast-marquee";
import ParallaxSection from "../parallaxSection";

function AboutMeSection() {
  const [darkTheme, setDarkTheme] = useState();
  // const { isDarkTheme } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const headingUnderline = useAnimation();
  const textAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      headingUnderline.start({
        scale: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      textAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      headingUnderline.start({ scale: 0.2 });
      textAnimation.start({ x: "-50vw" });
    }
  }, [inView]);

  return (
    <div ref={ref} className={classes.container}>
      <h2 className={classes.heading_left}>ABOUT{"  "}ME</h2>
      <h2 className={classes.heading_right}>ABOUT{"  "}ME</h2>

      <div className={classes.bottom_pattern_1} />
      <div className={classes.bottom_pattern_2} />
      <a target={"_blank"} href="https://github.com/Hamza141999">
        <img src={github.src} className={classes.github_icon} />
      </a>

      <div className={classes.content}>

        <ParallaxSection />

      </div>
    </div>
  );
}

export default AboutMeSection;
