"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";

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
    <div ref={containerRef} className="relative min-h-[700vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Zoom section */}
        <motion.div
          style={{
            scale,
            opacity: zoomOpacity,
          }}
          className="w-full h-full flex items-center justify-center bg-gradient-to-r from-primary to-secondary"
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
          className="absolute inset-0 bg-white"
        />
      </div>
    </div>
  );
}

{
  /* Revealed section with enhanced content and visuals */
}
{
  /* <motion.div
          style={{
            opacity: newSectionOpacity,
            scale: newSectionScale,
            filter: `brightness(${newSectionBrightness}) saturate(${newSectionSaturation}) blur(${newSectionBlur}px)`,
          }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-500 to-indigo-600"
        >
          <div className="min-h-screen py-20 px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-6xl font-bold mb-6 text-white text-center">
                Welcome to the Enchanted Realm
              </h2>
              <p className="text-2xl text-white max-w-3xl mx-auto text-center mb-20">
                As you delve deeper, the world around you becomes clearer,
                brighter, and more vibrant. Uncover the wonders that await in
                this magical dimension.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                {[
                  "Crystal Caverns",
                  "Floating Islands",
                  "Whispering Woods",
                  "Luminous Lakes",
                  "Celestial Citadel",
                  "Ethereal Gardens",
                  "Timeless Library",
                  "Astral Observatory",
                  "Mystic Marketplace",
                ].map((wonder, index) => (
                  <motion.div
                    key={index}
                    className="bg-white bg-opacity-20 p-8 rounded-lg backdrop-blur-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-3xl font-semibold mb-4 text-white">
                      {wonder}
                    </h3>
                    <p className="text-xl text-white">
                      Explore the mysteries and marvels of this enchanted
                      locale. Each step reveals new wonders and untold stories.
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="min-h-screen py-20 px-8 bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-6xl font-bold mb-6 text-white text-center">
                Discover Your Path
              </h2>
              <p className="text-2xl text-white max-w-3xl mx-auto text-center mb-20">
                In this realm, every choice leads to a new adventure. What will
                you uncover first?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  "Arcane Academy",
                  "Beastmaster's Lodge",
                  "Chronomancer's Tower",
                  "Druid's Grove",
                  "Elemental Forge",
                  "Fae Court",
                  "Golemancer's Workshop",
                  "Harmony Hall",
                ].map((path, index) => (
                  <motion.div
                    key={index}
                    className="bg-white bg-opacity-20 p-8 rounded-lg backdrop-blur-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-3xl font-semibold mb-4 text-white">
                      {path}
                    </h3>
                    <p className="text-xl text-white">
                      Embark on a journey of discovery and mastery in this
                      magical discipline. Uncover ancient secrets and forge your
                      own legacy in the annals of this mystical world.
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
         */
}
