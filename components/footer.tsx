// import { motion } from "framer-motion";
// import { Button } from "./ui/button";

// const Footer = () => {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <motion.footer
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="w-full h-[50vh] bg-background border-t border-border/10 mt-auto"
//     >
//       <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-between py-12 px-4">
//         <div className="w-full flex justify-between">
//           <div className="flex gap-8">
//             <motion.a
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/features"
//               className="text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Features
//             </motion.a>
//             <motion.a
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/gallery"
//               className="text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Gallery
//             </motion.a>
//           </div>
//           <div className="flex gap-8">
//             <motion.a
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/pricing"
//               className="text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Pricing
//             </motion.a>
//             <motion.a
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/resources"
//               className="text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Resources
//             </motion.a>
//           </div>
//         </div>

//         <div className="flex flex-col items-center gap-6">
//           <motion.h2
//             variants={itemVariants}
//             className="text-2xl font-light text-center"
//           >
//             Your beautiful home is our priority
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
//     </motion.footer>
//   );
// };

// export default Footer;

// components/Footer.tsx
"use client"; // Important for client-side animations

import { motion } from "framer-motion";
import Link from "next/link"; // Using Next.js Link for better navigation
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
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  </motion.div>
);

export default function Footer() {
    const images = [
        "/",
        "/",
        "/",
        "/",
        "/",
        "/",
        "/",
        "/",
        "/",
      ];
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible" // Changed from animate to whileInView
      viewport={{ once: true }} // Only animate once when in view
      variants={containerVariants}
      className="w-full h-[70vh] bg-background border-t border-border/10 mt-auto"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-between py-12 px-4">
        <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <div className="flex gap-8">
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/gallery">Gallery</FooterLink>
          </div>
          <div className="flex gap-8">
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/resources">Resources</FooterLink>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-light text-center"
          >
            {/* Your beautiful home is our priority */}
            Pay Less Get More
          </motion.h2>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 transition-colors py-6 px-8 text-lg rounded-full"
            >
              Try for free
            </Button>
          </motion.div>
        </div>
      </div>
      <FooterPhysics boardTextureURLs={images} className="h-[80vh]" />
    </motion.footer>
  );
}
