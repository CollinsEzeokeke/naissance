// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { NavBar } from "./nav-bar";
// import { PlayCircle } from "lucide-react";
// import { motion, useAnimationFrame } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { Boxes } from "./ui/background-boxes";

// const useFloatingAnimation = (duration = 3, distance = 15) => {
//   const [y, setY] = useState(0);

//   useAnimationFrame((t) => {
//     const newY = Math.sin(((t / 1000) * Math.PI * 2) / duration) * distance;
//     setY(newY);
//   });

//   return y;
// };

// const useMouseProximity = (
//   ref: React.RefObject<HTMLDivElement | null>,
//   threshold = 200
// ) => {
//   const [isNear, setIsNear] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       if (ref.current) {
//         const rect = ref.current.getBoundingClientRect();
//         const centerX = rect.left + rect.width / 2;
//         const centerY = rect.top + rect.height / 2;
//         const distance = Math.sqrt(
//           Math.pow(event.clientX - centerX, 2) +
//             Math.pow(event.clientY - centerY, 2)
//         );

//         setIsNear(distance < threshold);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [ref, threshold]);

//   return isNear;
// };

// const AnimatedIcon = ({ src, alt }: { src: string; alt: string }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isNear = useMouseProximity(ref, 100);
//   const floatingY = useFloatingAnimation();

//   return (
//     <motion.div
//       ref={ref}
//       className="items-center h-full w-full grid grid-cols-4 relative"
//       animate={{
//         y: isNear ? [0, -10, 0] : floatingY,
//       }}
//       transition={{
//         duration: isNear ? 0.5 : 3,
//         repeat: Number.POSITIVE_INFINITY,
//         repeatType: "reverse",
//         ease: isNear ? "easeInOut" : "linear",
//       }}
//       whileHover={{ scale: 1.2 }}
//       whileTap={{ scale: 0.9 }}
//     >
//       <Image
//         src={src || "/placeholder.svg"}
//         alt={alt}
//         fill
//         className="dark:invert"
//       />
//       <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap  text-white px-2 py-1 rounded text-sm">
//         {alt}
//       </span>
//     </motion.div>
//   );
// };

// export function HeroSection() {
//   const floatingY = useFloatingAnimation(5, 20);

//   return (
//     <div className="relative h-screen w-screen overflow-hidden bg-background transition-colors duration-300">
//       <div className="absolute inset-0 z-0">
//         <Boxes className="" />{" "}
//         {/* Reduce opacity to make it subtle */}
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
//         <NavBar />
//         <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-8">
//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
//               Revolutionizing <span className="block">Building Design</span>
//             </h1>
//             <p className="mt-6 text-lg text-muted-foreground">
//               Journey into the future of architecture with our cutting-edge 3D
//               building design platform. Create, customize, and visualize your
//               dream structures with unparalleled ease and precision.
//             </p>

//             <div className="mt-8 flex items-center gap-4">
//               <Button size="lg" className="bg-primary hover:bg-primary/90">
//                 Start Designing
//               </Button>
//               <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
//                 <PlayCircle className="h-5 w-5" />
//                 Watch demo
//               </button>
//             </div>

//             <div className="mt-12">
//               <p className="mb-4 text-sm text-muted-foreground">Trusted By</p>
//               <motion.div
//                 className="flex gap-4 max-w-[15vw] h-[10vh]"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: {
//                     opacity: 1,
//                     transition: {
//                       when: "beforeChildren",
//                       staggerChildren: 0.1,
//                     },
//                   },
//                 }}
//               >
//                 <AnimatedIcon src="/trustpilot.svg" alt="CAD" />
//                 <AnimatedIcon src="/adl.svg" alt="BIM" />
//                 <AnimatedIcon src="/HAl.svg" alt="3D Studio" />
//                 <AnimatedIcon src="/microsoft.svg" alt="SketchUp" />
//               </motion.div>
//             </div>
//           </div>

//           <div className="relative overflow-hidden rounded-lg">
//             <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
//               {[...Array(16)].map((_, i) => (
//                 <div key={i} className="border border-border/40" />
//               ))}
//             </div>

//             <motion.div
//               className="relative aspect-square"
//               animate={{ y: floatingY }}
//               transition={{
//                 duration: 5,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//                 ease: "linear",
//               }}
//               whileHover={{ scale: 1.1 }}
//             >
//               <Image
//                 src="/property.jpeg?height=600&width=600"
//                 alt="Modern Building Design"
//                 fill
//                 className="object-cover rounded-lg transition-all duration-300 ease-in-out"
//                 priority
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavBar } from "./nav-bar";
import { PlayCircle } from "lucide-react";
import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Boxes } from "./ui/background-boxes";

const useFloatingAnimation = (duration = 3, distance = 15) => {
  const [y, setY] = useState(0);

  useAnimationFrame((t) => {
    const newY = Math.sin(((t / 1000) * Math.PI * 2) / duration) * distance;
    setY(newY);
  });

  return y;
};

const useMouseProximity = (
  ref: React.RefObject<HTMLDivElement | null>,
  threshold = 200
) => {
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(event.clientX - centerX, 2) +
            Math.pow(event.clientY - centerY, 2)
        );

        setIsNear(distance < threshold);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [ref, threshold]);

  return isNear;
};

const AnimatedIcon = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isNear = useMouseProximity(ref, 100);
  const floatingY = useFloatingAnimation();

  return (
    <motion.div
      ref={ref}
      className="relative h-12 w-12 md:h-16 md:w-16" // Modified sizes for better mobile display
      animate={{
        y: isNear ? [0, -10, 0] : floatingY,
      }}
      transition={{
        duration: isNear ? 0.5 : 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: isNear ? "easeInOut" : "linear",
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="dark:invert object-contain"
      />
      <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-white px-2 py-1 rounded text-xs md:text-sm">
        {alt}
      </span>
    </motion.div>
  );
};

export function HeroSection() {
  const floatingY = useFloatingAnimation(5, 20);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <Boxes />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <NavBar />
        <div className="mt-8 md:mt-16 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 py-8 md:py-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground">
              Revolutionizing{" "}
              <span className="block">Building Design</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground">
              Journey into the future of architecture with our cutting-edge 3D
              building design platform. Create, customize, and visualize your
              dream structures with unparalleled ease and precision.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                Start Designing
              </Button>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <PlayCircle className="h-5 w-5" />
                Watch demo
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="mt-8 md:mt-12">
              <p className="mb-4 text-sm text-muted-foreground">Trusted By</p>
              <motion.div
                className="flex flex-wrap gap-6 md:gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      when: "beforeChildren",
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <AnimatedIcon src="/trustpilot.svg" alt="CAD" />
                <AnimatedIcon src="/adl.svg" alt="BIM" />
                <AnimatedIcon src="/HAl.svg" alt="3D Studio" />
                <AnimatedIcon src="/microsoft.svg" alt="SketchUp" />
              </motion.div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="border border-border/40" />
              ))}
            </div>

            <motion.div
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square"
              animate={{ y: floatingY }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "linear",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/property.jpeg"
                alt="Modern Building Design"
                fill
                className="object-cover rounded-lg transition-all duration-300 ease-in-out"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
