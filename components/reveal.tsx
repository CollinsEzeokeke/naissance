"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import HouseSection from "./houseReveal";

export default function ScrollZoomReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth zoom effect to about 10% of screen size (scale of 10)
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 10], {
    ease: easeInOut,
  });
  const zoomOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);

  // Blank screen transition
  const blankScreenOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    [0, 1, 0] 
  );

  // New section reveal and enhancement
  const newSectionOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const newSectionScale = useTransform(scrollYProgress, [0.6, 1], [0.9, 1]);
  const newSectionBrightness = useTransform(
    scrollYProgress,
    [0.7, 1],
    [0.7, 1.2]
  );
  const newSectionSaturation = useTransform(
    scrollYProgress,
    [0.7, 1],
    [0.8, 1.3]
  );
  const newSectionBlur = useTransform(scrollYProgress, [0.7, 1], [5, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[700vh] bg-blue-500/35">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Zoom section */}
        <motion.div
          style={{
            scale,
            opacity: zoomOpacity,
          }}
          // bg-gradient-to-r from-[#1A273C] to-secondary
          className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-blue-500 via-background to-primary"
        >
          <div className="text-center text-white h-full w-full flex justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">
              These Efforts leave you with?
            </h1>
          </div>
        </motion.div>

        {/* Blank screen transition */}
        <motion.div
          style={{
            opacity: blankScreenOpacity,
          }}
          className="absolute inset-0 bg-inherit"
        />
        <motion.div
          style={{
            opacity: newSectionOpacity,
            scale: newSectionScale,
            filter: `brightness(${newSectionBrightness}) saturate(${newSectionSaturation}) blur(${newSectionBlur}px)`,
          }}
          className="absolute inset-0 "
        >
          <HouseSection />
        </motion.div>
      </div>
    </div>
  );
}

{
  /* Revealed section with enhanced content and visuals */
}
