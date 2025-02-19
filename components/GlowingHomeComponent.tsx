"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TextGradientScroll from "./ui/scrollGradient";

export default function GlowingHomeComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    (<motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#121b2a62] to-secondary overflow-hidden"
    >
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full lg:w-1/2 text-primary-foreground mb-12 lg:mb-0"
          >
            <h1 className="text-4xl text-slate-200 md:text-6xl font-bold mb-6 leading-tight">
              <TextGradientScroll
                text="Providing a Happy Home"
                textOpacity="soft"
                type="letter"
              />
            </h1>
            <div className="text-xl md:text-2xl mb-8 text-slate-400">
              <TextGradientScroll
                text="At Build Journey, our main aim is to ensure every family finds their perfect, happy home - not just your average house but a home."
                textOpacity="medium"
                type="letter"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-semibold text-lg shadow-lg hover:bg-opacity-90 transition duration-300"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-full lg:w-1/2 lg:pl-12"
          >
            <div className="relative w-full h-[600px] group">
              {/* First Image - This will scale up on hover */}
              <motion.div
                className="absolute top-0 w-full h-[500px] rounded-lg overflow-hidden z-10
                 group-hover:scale-110 transition-transform duration-300 mt-28"
              >
                <Image
                  src="/happy-home.png"
                  alt="Happy Home"
                  // objectFit="cover"
                  className="rounded-lg"
                  fill
                  sizes="100vw" />
              </motion.div>

              {/* Second Image - This stays static */}
              <div className="absolute bottom-0 w-full h-[500px] rounded-lg overflow-hidden shadow-2xl group-hover:shadow-black">
                <Image
                  src="https://pinoyhousedesigns.com/wp-content/uploads/2017/10/GL000.jpg"
                  alt="Interior Home"
                  // objectFit="cover"
                  className="rounded-lg"
                  fill
                  sizes="100vw" />
                
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40" />

                <div className="absolute inset-x-0 top-0 pt-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[20vh]">
                  <p className="text-white text-2xl md:text-3xl font-semibold text-center px-6 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    What more could you possibly ask for in life?
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/40 rounded-tl-lg p-6">
                    <blockquote className="text-white">
                      <p className="text-lg md:text-xl italic mb-2 leading-relaxed">
                        &quot;A house is a place, a home is a people, we come
                        home to people not to places&quot;
                      </p>
                      <footer className="text-sm md:text-base text-gray-300 text-right mt-3">
                        — <cite>Elon Musk</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 animate-subtle-pulse" />
    </motion.section>)
  );
}
