import { motion, easeOut } from "framer-motion";

export default function Ball() {
  return (
    <>
      <div className="flex items-center justify-center gap-2 mb-8">
        <motion.div
          initial={{ zIndex: 0, y: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
            zIndex: 10,
            y: -10,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            type: "spring",
            ease: easeOut(0.2),
          }}
          className="w-2 h-2 rounded-full bg-primary"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.2,
          }}
          className="w-2 h-2 rounded-full bg-primary/80"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.4,
          }}
          className="w-2 h-2 rounded-full bg-primary/60"
        />
      </div>
    </>
  );
}
