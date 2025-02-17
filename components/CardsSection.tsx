"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import CardColumn from "./CardColumn";
import { createColumns } from "@/utils/cardUtils";
import { cards } from "@/data/cards";

const CardsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const columns = createColumns(cards);
  // bg-gradient-to-b from-background to-secondary
  return (
    // bg-gradient-to-b from-background to-secondary
    <div
      className="relative min-h-[300vh] pb-0 pt-0 bg-[#020817]"
      ref={containerRef}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.1),transparent)]" />

      <div className="relative h-[50vh] flex flex-col items-center justify-center">
        <motion.div
          className="w-8 h-8 rounded-full bg-primary shadow-lg cursor-pointer"
          animate={{
            y: [-20, 20],
            scale: [1, 0.9, 1],
          }}
          whileHover={{
            scale: [1, 1.5, 0.8, 1.2, 1],
            rotate: [0, 360, -180, 360],
            backgroundColor: [
              "hsl(var(--primary))",
              "hsl(var(--destructive))",
              "hsl(var(--accent))",
              "hsl(var(--secondary))",
              "hsl(var(--primary))",
            ],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          whileTap={{
            y: "90vh",
            transition: {
              duration: 2,
              ease: [0.45, 0, 0.55, 1],
              y: {
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1],
              },
            },
          }}
          transition={{
            y: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            scale: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-foreground mt-8 text-center px-4"
        >
          Our Comprehensive Home Solutions
        </motion.h1>
      </div>

      <div className="flex justify-center h-full w-full">
        <div className="relative perspective-1000 w-5/6">
          {columns.map((columnCards, columnIndex) => (
            <CardColumn
              key={columnIndex}
              columnCards={columnCards}
              columnIndex={columnIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
