"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1"];

const Ball = ({
  index,
  globalSpeed,
  setGlobalSpeed,
}: {
  index: number;
  globalSpeed: number;
  setGlobalSpeed: (speed: number) => void;
}) => {
  const controls = useAnimation();
  const [localSpeed, setLocalSpeed] = useState(1);
  const lastUpdateTimeRef = useRef(Date.now());
  const progressRef = useRef(0);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        const now = Date.now();
        const deltaTime = (now - lastUpdateTimeRef.current) / 1000;
        lastUpdateTimeRef.current = now;

        progressRef.current += deltaTime * localSpeed;

        await controls.start({
          rotate: progressRef.current * 360,
          transition: { duration: 0, ease: "linear" },
        });
      }
    };
    animate();
  }, [controls, localSpeed]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalSpeed(globalSpeed);
    }, 3);
    return () => clearTimeout(timer);
  }, [globalSpeed]);

  return (
    <motion.div
      className="relative w-16 h-16 rounded-full"
      style={{ backgroundColor: colors[index] }}
      animate={controls}
      onHoverStart={() => {
        setLocalSpeed(2);
        setGlobalSpeed(2);
      }}
      onHoverEnd={() => {
        setLocalSpeed(1);
        setGlobalSpeed(1);
      }}
      whileHover={{
        scale: 1.2,
        boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: [
            `radial-gradient(circle, ${colors[index]}, transparent)`,
            `radial-gradient(circle, ${colors[(index + 1) % 3]}, transparent)`,
            `radial-gradient(circle, ${colors[(index + 2) % 3]}, transparent)`,
          ],
        }}
        transition={{
          duration: 4 / localSpeed,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};

export default function IndividualBallHover() {
  const [globalSpeed, setGlobalSpeed] = useState(1);

  return (
    <div className="flex items-center justify-center gap-8 h-64 bg-gray-100 overflow-hidden">
      {[0, 1, 2].map((index) => (
        <Ball
          key={index}
          index={index}
          globalSpeed={globalSpeed}
          setGlobalSpeed={setGlobalSpeed}
        />
      ))}
    </div>
  );
}
