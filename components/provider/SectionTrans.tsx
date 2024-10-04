"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const SectionTrans = ({
  sectionOne,
  sectionTwo,
}: {
  sectionOne: React.ReactNode;
  sectionTwo: React.ReactNode;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  //   Section One Animation
  const scaleONE = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacityONE = useTransform(scrollYProgress, [0, 0.7], [1, 0.0]);

  //   Section Two Animation

  const scaleTWO = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotateTWO = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <main ref={ref} className=" relative ">
      <motion.div
        style={{
          opacity: opacityONE,
          scale: scaleONE,
        }}
        className=" sticky top-0"
      >
        {sectionOne}
      </motion.div>
      <motion.div
        style={{
          scale: scaleTWO,
          rotate: rotateTWO,
        }}
        className=" relative z-10"
      >
        {sectionTwo}
      </motion.div>
    </main>
  );
};

export default SectionTrans;
