"use client";

import React, { createContext, useContext, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type TextOpacityEnum = "none" | "soft" | "medium";

type TextGradientScrollType = {
  children: React.ReactNode;
  className?: string;
  textOpacity?: TextOpacityEnum;
};

type ChildWrapperType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
};

type TextGradientScrollContextType = {
  textOpacity?: TextOpacityEnum;
};

const TextGradientScrollContext = createContext<TextGradientScrollContextType>(
  {}
);

function useGradientScroll() {
  return useContext(TextGradientScrollContext);
}

export default function ElementScroolGradient({
  children,
  className,
  textOpacity = "soft",
}: TextGradientScrollType) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;

  return (
    <TextGradientScrollContext.Provider value={{ textOpacity }}>
      <div ref={ref} className={cn("relative flex flex-wrap", className)}>
        {childrenArray.map((child, index) => {
          const start = index / totalChildren;
          const end = start + 1 / totalChildren;
          
          return (
            <ChildWrapper
              key={index}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {child}
            </ChildWrapper>
          );
        })}
      </div>
    </TextGradientScrollContext.Provider>
  );
}

const ChildWrapper = ({ children, progress, range }: ChildWrapperType) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const { textOpacity } = useGradientScroll();

  return (
    <div className="relative me-2 mt-2">
      <div
        className={cn("absolute", {
          "opacity-0": textOpacity == "none",
          "opacity-10": textOpacity == "soft",
          "opacity-30": textOpacity == "medium",
        })}
      >
        {children}
      </div>
      <motion.div
        style={{
          transition: "all .5s",
          opacity: opacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
