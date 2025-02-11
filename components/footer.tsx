// "use client"; // Important for client-side animations

// import { motion } from "framer-motion";
// import Link from "next/link"; // Using Next.js Link for better navigation
// import { Button } from "./ui/button";
// import { FooterPhysics } from "./FooterPhysics";

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };

// const FooterLink = ({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) => (
//   <motion.div
//     variants={itemVariants}
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <Link
//       href={href}
//       className="text-muted-foreground hover:text-foreground transition-colors"
//     >
//       {children}
//     </Link>
//   </motion.div>
// );

// export default function Footer() {
//   const images = [
//     "/r.png",
//     "/e.png",
//     "/f.png",
//     "/r.png",
//     "/e.png",
//     "/d.png",
//     "/r.png",
//     "/e.png",
//     "/e.png",
//     "/d.png",
//   ];
//   return (
//     <motion.footer
//       initial="hidden"
//       whileInView="visible" // Changed from animate to whileInView
//       viewport={{ once: true }} // Only animate once when in view
//       variants={containerVariants}
//       className="w-full h-[70vh] bg-background border-t border-border/10 mt-auto group"
//     >
//       <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-between py-12 px-4 bg-black">
//         <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-0">
//           <div className="flex gap-8">
//             <FooterLink href="/features">Features</FooterLink>
//             <FooterLink href="/gallery">Gallery</FooterLink>
//           </div>
//           <div className="flex gap-8">
//             <FooterLink href="/pricing">Pricing</FooterLink>
//             <FooterLink href="/resources">Resources</FooterLink>
//           </div>
//         </div>

//         <div className="flex flex-col items-center gap-6">
//           <motion.h2
//             variants={itemVariants}
//             className="text-xl md:text-2xl font-light text-center"
//           >
//             {/* Your beautiful home is our priority */}
//             Pay Less Get More
//           </motion.h2>

//           <motion.div
//             variants={itemVariants}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <Button
//               size="lg"
//               className="bg-foreground text-background hover:bg-foreground/90 transition-colors py-6 px-8 text-lg rounded-full"
//             >
//               Try for free
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//       <FooterPhysics boardTextureURLs={images} className="h-[70vh]" />
//     </motion.footer>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import { FooterPhysics } from "./FooterPhysics";

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };

// const FooterLink = ({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) => (
//   <motion.div
//     variants={itemVariants}
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <Link
//       href={href}
//       className="text-muted-foreground hover:text-foreground transition-colors"
//     >
//       {children}
//     </Link>
//   </motion.div>
// );

// export default function Footer() {
//   const images = [
//     "/r.png",
//     "/e.png",
//     "/f.png",
//     "/r.png",
//     "/e.png",
//     "/d.png",
//     "/r.png",
//     "/e.png",
//     "/e.png",
//     "/d.png",
//   ];
//   return (
//     <motion.footer
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//       className="w-full h-[70vh] bg-background border-t border-border/10 mt-auto group relative"
//     >
//       {/* FooterPhysics as background */}
//       <div className="absolute inset-0 z-0">
//         <FooterPhysics boardTextureURLs={images} className="h-full w-full" />
//       </div>

//       {/* Content overlay with higher z-index */}
//       <div className="absolute inset-0 z-20">
//         <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-between py-12 px-4">
//           <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-0">
//             <div className="flex gap-8">
//               <FooterLink href="/features">Features</FooterLink>
//               <FooterLink href="/gallery">Gallery</FooterLink>
//             </div>
//             <div className="flex gap-8">
//               <FooterLink href="/pricing">Pricing</FooterLink>
//               <FooterLink href="/resources">Resources</FooterLink>
//             </div>
//           </div>

//           <div className="flex flex-col items-center gap-6">
//             <motion.h2
//               variants={itemVariants}
//               className="text-xl md:text-2xl font-light text-center text-foreground"
//             >
//               Pay Less Get More
//             </motion.h2>

//             <motion.div
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Button
//                 size="lg"
//                 className="bg-foreground text-background hover:bg-foreground/90 transition-colors py-6 px-8 text-lg rounded-full"
//               >
//                 Try for free
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </motion.footer>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { FooterPhysics } from "./FooterPhysics";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      href={href}
      // className="text-muted-foreground hover:text-foreground transition-colors"
      className="text-[#FFF5E1] hover:text-[#98FF98] transition-colors duration-300 font-medium drop-shadow-md"
    >
      {children}
    </Link>
  </motion.div>
);

export default function Footer() {
  const images = [
    "/r.png",
    "/e.png",
    "/f.png",
    "/r.png",
    "/e.png",
    "/d.png",
    "/r.png",
    "/e.png",
    "/e.png",
    "/d.png",
  ];
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-full h-screen relative bg-cover bg-center bg-no-repeat border-t border-border/10 mt-auto group"
      style={{
        backgroundImage: `url('https://media.cntraveler.com/photos/53da8e976dec627b149f2b16/master/w_1920,c_limit/fairmont-san-francisco-gingerbread-house.jpg')`,
      }}
    >
      {/* FooterPhysics layer */}
      <div className="absolute inset-0 z-10">
        <FooterPhysics boardTextureURLs={images} className="h-full w-full" />
      </div>

      {/* Content overlay */}
      {/* <div className="absolute inset-0 z-20 pointer-events-none"> */}
      {/* <div className="absolute inset-0 z-20 pointer-events-none bg-[#8B4513]/30"> */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-secondary/30">
        <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-between py-12 px-4">
          <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-0">
            <div className="flex gap-8">
              <div className="pointer-events-auto">
                <FooterLink href="/features">Features</FooterLink>
              </div>
              <div className="pointer-events-auto">
                <FooterLink href="/gallery">Gallery</FooterLink>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="pointer-events-auto">
                <FooterLink href="/pricing">Pricing</FooterLink>
              </div>
              <div className="pointer-events-auto">
                <FooterLink href="/resources">Resources</FooterLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-full gap-6">
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-3xl text-center text-white text-shadow-lg bg-black/40 font-bold px-4 py-2 rounded-lg"
            >
              Pay Less Get More
            </motion.h2>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pointer-events-auto"
            >
              <Button
                size="lg"
                // className="bg-foreground text-background hover:bg-foreground/90 transition-colors py-6 px-8 text-lg rounded-full"
                className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-8 py-4 rounded-full font-medium shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                Try for free
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
