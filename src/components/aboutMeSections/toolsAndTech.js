import React, { useEffect, useRef, useState } from "react";
import classes from "./aboutMeSections.module.css";
import react from "../../../public/assets/aboutme_section_assets/react.svg";
import next from "../../../public/assets/aboutme_section_assets/next.svg";
import framer from "../../../public/assets/aboutme_section_assets/framer.svg";
import threejs from "../../../public/assets/aboutme_section_assets/threejs.svg";

import figma from "../../../public/assets/aboutme_section_assets/figma.svg";
import psd from "../../../public/assets/aboutme_section_assets/psd.svg";
import ai from "../../../public/assets/aboutme_section_assets/ai.svg";
import xd from "../../../public/assets/aboutme_section_assets/xd.svg";

import metamask from "../../../public/assets/aboutme_section_assets/metamask.svg";
import aws from "../../../public/assets/aboutme_section_assets/aws.svg";


import { motion, useAnimation, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ToolsAndTech() {
  const ref = useRef(null);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const { scrollYProgress } = useScroll({ container: ref });

  const { ref: inViewSec1Ref, inView: inViewSec1 } = useInView({
    threshold: 0.5,
  });

  const { ref: inViewSec2Ref, inView: inViewSec2 } = useInView({
    threshold: 0.5,
  });

  const { ref: inViewSec3Ref, inView: inViewSec3 } = useInView({
    threshold: 0.5,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headingTransformationScale = useTransform(
    scrollYProgress,
    (value) => 1 + value * 5
  );

  // ******************************** FIRST SECTION ********************************

  // FIRST ICON

  const firstIconLeftOffset = 100; // Adjust this value to set the initial gap from the left side
  const [firstIconAmplifier, setFirstIconAmplifier] = useState(1000);
  const firstToolTransformation = useTransform(
    scaleX,
    (value) => firstIconLeftOffset + value * firstIconAmplifier
  );

  // SECOND ICON

  const secondIconLeftOffset = 300;
  const [secondIconAmplifier, setSecondIconAmplifier] = useState(1500);
  const [secondIconAmplifierUp, setSecondIconAmplifierUp] = useState(1300);
  const secondToolTransformation = useTransform(
    scaleX,
    (value) => secondIconLeftOffset + value * secondIconAmplifier
  );
  const secondToolTransformationUp = useTransform(
    scaleX,
    (value) => 150 + value * secondIconAmplifierUp
  );

  // THIRD ICON

  const thirdIconLeftOffset = 140;
  const [thirdIconAmplifier, setThirdIconAmplifier] = useState(-900);
  const [thirdIconAmplifierUp, setThirdIconAmplifierUp] = useState(100);
  const thirdToolTransformation = useTransform(
    scaleX,
    (value) => thirdIconLeftOffset + value * thirdIconAmplifier
  );
  const thirdToolTransformationUp = useTransform(
    scaleX,
    (value) => 100 + value * thirdIconAmplifierUp
  );

  // FOURTH ICON

  const fourthIconLeftOffset = 400;

  const [fourthIconAmplifier, setFourthIconAmplifier] = useState(-700);
  const [fourthIconAmplifierUp, setFourthIconAmplifierUp] = useState(1000);

  const fourthToolTransformation = useTransform(
    scaleX,
    (value) => fourthIconLeftOffset + value * fourthIconAmplifier
  );
  const fourthToolTransformationUp = useTransform(
    scaleX,
    (value) => 60 + value * fourthIconAmplifierUp
  );

  // ******************************** SECOND SECTION ********************************

  // FIRST ICON

  const oneFullScrollAmplifier = 0.33;

  const [firstIconAmplifierContainer2, setFirstIconAmplifierContainer2] =
    useState(1000);

  const firstIconDistanceContainer2 = 100;
  const firstIconLeftOffsetContainer2 =
    firstIconDistanceContainer2 -
    oneFullScrollAmplifier * firstIconAmplifierContainer2;

  const firstToolTransformationContainer2 = useTransform(
    scaleX,
    (value) =>
      firstIconLeftOffsetContainer2 + value * firstIconAmplifierContainer2
  );

  console.log(firstIconAmplifierContainer2);

  // SECOND ICON
  const [secondIconAmplifierContainer2, setSecondIconAmplifierContainer2] =
    useState(1500);

  const [
    secondIconLeftOffsetUpContainer2,
    setSecondIconLeftOffsetUpContainer2,
  ] = useState(150);

  const secondIconDistanceContainer2 = 300;
  const secondIconLeftOffsetContainer2 =
    secondIconDistanceContainer2 -
    oneFullScrollAmplifier * secondIconAmplifierContainer2;

  const [secondIconAmplifierUpContainer2, setSecondIconAmplifierUpContainer2] =
    useState(1300);

  const secondIconDistanceUpContainer2 =
    secondIconLeftOffsetUpContainer2 -
    oneFullScrollAmplifier * secondIconAmplifierUpContainer2;

  const secondToolTransformationContainer2 = useTransform(
    scaleX,
    (value) =>
      secondIconLeftOffsetContainer2 + value * secondIconAmplifierContainer2
  );
  const secondToolTransformationUpContainer2 = useTransform(
    scaleX,
    (value) =>
      secondIconDistanceUpContainer2 + value * secondIconAmplifierUpContainer2
  );

  // THIRD ICON

  const [thirdIconAmplifierContainer2, setThirdIconAmplifierContainer2] =
    useState(-900);
  const [thirdIconAmplifierUpContainer2, setThirdIconAmplifierUpContainer2] =
    useState(100);

  const thirdIconDistanceContainer2 = 140;
  const thirdIconLeftOffsetContainer2 =
    thirdIconDistanceContainer2 +
    oneFullScrollAmplifier * Math.abs(thirdIconAmplifierContainer2);

  const thirdIconDistanceUpContainer2 = 100;
  const thirdIconLeftOffsetUpContainer2 =
    thirdIconDistanceUpContainer2 -
    oneFullScrollAmplifier * Math.abs(thirdIconAmplifierUpContainer2);

  const thirdToolTransformationContainer2 = useTransform(
    scaleX,
    (value) =>
      thirdIconLeftOffsetContainer2 + value * thirdIconAmplifierContainer2
  );
  const thirdToolTransformationUpContainer2 = useTransform(
    scaleX,
    (value) =>
      thirdIconLeftOffsetUpContainer2 + value * thirdIconAmplifierUpContainer2
  );

  // FOURTH ICON

  const [fourthIconAmplifierContainer2, setFourthIconAmplifierContainer2] =
    useState(-700);
  const [fourthIconAmplifierUpContainer2, setFourthIconAmplifierUpContainer2] =
    useState(1000);

  const fourthIconDistanceContainer2 = 400;
  const fourthIconLeftOffsetContainer4 =
    fourthIconDistanceContainer2 +
    oneFullScrollAmplifier * Math.abs(fourthIconAmplifierContainer2);

  const fourthIconDistanceUpContainer2 = 60;
  const fourthIconLeftOffsetUpContainer4 =
    fourthIconDistanceUpContainer2 -
    oneFullScrollAmplifier * Math.abs(fourthIconAmplifierUpContainer2);

  const fourthToolTransformationContainer2 = useTransform(
    scaleX,
    (value) =>
      fourthIconLeftOffsetContainer4 + value * fourthIconAmplifierContainer2
  );
  const fourthToolTransformationUpContainer2 = useTransform(
    scaleX,
    (value) =>
      fourthIconLeftOffsetUpContainer4 + value * fourthIconAmplifierUpContainer2
  );

  // ******************************** THIRD SECTION ********************************

  // FIRST ICON

  const oneFullScrollAmplifierSection3 = 0.33 * 2;

  const [firstIconAmplifierContainer3, setFirstIconAmplifierContainer3] =
    useState(1000);

  const firstIconDistanceContainer3 = 100;
  const firstIconLeftOffsetContainer3 =
    firstIconDistanceContainer3 -
    oneFullScrollAmplifierSection3 * firstIconAmplifierContainer3;

  const firstToolTransformationContainer3 = useTransform(
    scaleX,
    (value) =>
      firstIconLeftOffsetContainer3 + value * firstIconAmplifierContainer3
  );

  console.log(firstIconAmplifierContainer3);

  // SECOND ICON
  const [secondIconAmplifierContainer3, setSecondIconAmplifierContainer3] =
    useState(1500);

  const [
    secondIconLeftOffsetUpContainer3,
    setSecondIconLeftOffsetUpContainer3,
  ] = useState(150);

  const secondIconDistanceContainer3 = 290;
  const secondIconLeftOffsetContainer3 =
    secondIconDistanceContainer3 -
    oneFullScrollAmplifierSection3 * secondIconAmplifierContainer3;

  const [secondIconAmplifierUpContainer3, setSecondIconAmplifierUpContainer3] =
    useState(1300);

  const secondIconDistanceUpContainer3 =
    secondIconLeftOffsetUpContainer3 -
    oneFullScrollAmplifierSection3 * secondIconAmplifierUpContainer3;

  const secondToolTransformationContainer3 = useTransform(
    scaleX,
    (value) =>
      secondIconLeftOffsetContainer3 + value * secondIconAmplifierContainer3
  );
  const secondToolTransformationUpContainer3 = useTransform(
    scaleX,
    (value) =>
      secondIconDistanceUpContainer3 + value * secondIconAmplifierUpContainer3
  );

  // THIRD ICON

  const [thirdIconAmplifierContainer3, setThirdIconAmplifierContainer3] =
    useState(-900);
  const [thirdIconAmplifierUpContainer3, setThirdIconAmplifierUpContainer3] =
    useState(100);

  const thirdIconDistanceContainer3 = 140;
  const thirdIconLeftOffsetContainer3 =
    thirdIconDistanceContainer3 +
    oneFullScrollAmplifierSection3 * Math.abs(thirdIconAmplifierContainer3);

  const thirdIconDistanceUpContainer3 = 100;
  const thirdIconLeftOffsetUpContainer3 =
    thirdIconDistanceUpContainer3 -
    oneFullScrollAmplifierSection3 * Math.abs(thirdIconAmplifierUpContainer3);

  const thirdToolTransformationContainer3 = useTransform(
    scaleX,
    (value) =>
      thirdIconLeftOffsetContainer3 + value * thirdIconAmplifierContainer3
  );
  const thirdToolTransformationUpContainer3 = useTransform(
    scaleX,
    (value) =>
      thirdIconLeftOffsetUpContainer3 + value * thirdIconAmplifierUpContainer3
  );

  // FOURTH ICON

  const [fourthIconAmplifierContainer3, setFourthIconAmplifierContainer3] =
    useState(-700);
  const [fourthIconAmplifierUpContainer3, setFourthIconAmplifierUpContainer3] =
    useState(1000);

  const fourthIconDistanceContainer3 = 400;
  const fourthIconLeftOffsetContainer3 =
    fourthIconDistanceContainer3 +
    oneFullScrollAmplifierSection3 * Math.abs(fourthIconAmplifierContainer3);

  const fourthIconDistanceUpContainer3 = 60;
  const fourthIconLeftOffsetUpContainer3 =
    fourthIconDistanceUpContainer3 -
    oneFullScrollAmplifierSection3 * Math.abs(fourthIconAmplifierUpContainer3);

  const fourthToolTransformationContainer3 = useTransform(
    scaleX,
    (value) =>
      fourthIconLeftOffsetContainer3 + value * fourthIconAmplifierContainer2
  );
  const fourthToolTransformationUpContainer3 = useTransform(
    scaleX,
    (value) =>
      fourthIconLeftOffsetUpContainer3 + value * fourthIconAmplifierUpContainer2
  );

  const process = [
    {
      heading: "Design & Moodboard",
      description:
        "Want to make an amazing website? Or want to take your existing website to a new level? I got you covered! Here's the overview of the process:",
      steps: [
        ">  One-to-one meeting to exchange our ideas/design inspirations",
        ">  An overall moodboard and a tentative design",
        ">  2D/3D assets for the website, optimised for mobile devices as well",
        ">  A final design at the end",
      ],
    },
    {
      heading: "Design Implementation",
      description: "Here's the fun part, lets make the design come to life!",
      steps: [
        ">  A custom developed website with garaunteed sky-rocketing user retention",
        ">  Framer motion/GSAP animations based on your taste",
        ">  A fully responsive, amazing website tailored for your business or solution",
      ],
    },
    {
      heading: "Backend & Web3",
      description: "Have backend stuff to sort out, or want a your website to be fully Web3 integrated? Look no further ",
      steps: [
        ">  Web3 wallet and complete smart contract integration with your DApp",
        ">  Integrate projects with various backends, including cloud services like AWS and Azure, to ensure seamless and scalable solutions",
      ],
    }
  ];

  const [activeProcess, setActiveProcess] = useState(process[0]);
  const processAnimation = useAnimation();

  const handleProcess = async (index) => {
    processAnimation.start({
      x: 40,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.35,
      },
    });

    await delay(175);
    setActiveProcess(process[index]);
    await delay(175);

    processAnimation.start({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });
  };

  useEffect(() => {
    if (inViewSec1) {
      handleProcess(0);
    } else if (inViewSec2) {
      handleProcess(1);
    } else if (inViewSec3) {
      handleProcess(2);
    }
  }, [inViewSec1, inViewSec2, inViewSec3]);

  return (
    <div ref={ref} className={classes.tools_section}>
      <motion.div
        animate={processAnimation}
        className={classes.tools_main_heading_container}
      >
        <h1>{activeProcess.heading}</h1>

        <div className={classes.heading_content}>
          <p>{activeProcess.description}</p>

          {activeProcess?.steps?.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </motion.div>

      <div className={classes.tools_section_content_container}>
        <div className={classes.tools_heading_container}>
          <motion.h1
            style={{
              scale: headingTransformationScale,
            }}
            className={classes.tools_heading}
          >
            Process & Tech
          </motion.h1>
        </div>
        <div ref={inViewSec1Ref} className={classes.tools_section_1}>
          <motion.img
            src={figma.src}
            style={{
              left: firstToolTransformation,
              // scale: iconsTransformationScale,
            }}
            className={classes.tool1}
          />
          <motion.img
            src={xd.src}
            style={{
              left: fourthToolTransformation,
              bottom: fourthToolTransformationUp,
              // scale: iconsTransformationScale,
            }}
            className={classes.next}
          />

          <motion.img
            src={ai.src}
            style={{
              left: secondToolTransformation,
              bottom: secondToolTransformationUp,
              // scale: iconsTransformationScale,
            }}
            className={classes.js}
          />

          <motion.img
            src={psd.src}
            style={{
              left: thirdToolTransformation,
              bottom: thirdToolTransformationUp,
              // scale: iconsTransformationScale,
            }}
            className={classes.ts}
          />
        </div>
        <div ref={inViewSec2Ref} className={classes.tools_section_2}>
          <motion.img
            src={react.src}
            style={{
              left: firstToolTransformationContainer2,
              // scale: iconsTransformationScale,
            }}
            className={classes.tool1}
          />
          <motion.img
            src={next.src}
            style={{
              left: fourthToolTransformationContainer2,
              bottom: fourthToolTransformationUpContainer2,
              // scale: iconsTransformationScale,
            }}
            className={classes.next}
          />

          <motion.img
            src={framer.src}
            style={{
              left: secondToolTransformationContainer2,
              bottom: secondToolTransformationUpContainer2,
              // scale: iconsTransformationScale,
            }}
            className={classes.js}
          />

          <motion.img
            src={threejs.src}
            style={{
              left: thirdToolTransformationContainer2,
              bottom: thirdToolTransformationUpContainer2,
              // scale: iconsTransformationScale,
            }}
            className={classes.ts}
          />
        </div>

        <div ref={inViewSec3Ref} className={classes.tools_section_3}>
          <motion.img
            src={metamask.src}
            style={{
              left: firstToolTransformationContainer3,
              // scale: iconsTransformationScale,
            }}
            className={classes.tool1}
          />
          <motion.img
            src={aws.src}
            style={{
              left: fourthToolTransformationContainer3,
              bottom: fourthToolTransformationUpContainer3,
              // scale: iconsTransformationScale,
            }}
            className={classes.next}
          />

          <motion.img
            src={framer.src}
            style={{
              left: secondToolTransformationContainer3,
              bottom: secondToolTransformationUpContainer3,
              // scale: iconsTransformationScale,
            }}
            className={classes.js}
          />

          <motion.img
            src={threejs.src}
            style={{
              left: thirdToolTransformationContainer3,
              bottom: thirdToolTransformationUpContainer3,
              // scale: iconsTransformationScale,
            }}
            className={classes.ts}
          />
        </div>
      </div>
    </div>
  );
}

export default ToolsAndTech;
