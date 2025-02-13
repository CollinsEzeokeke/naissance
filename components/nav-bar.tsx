"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./toogle";
import { motion } from "framer-motion";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4x h-[5vh]">
      <div className="flex items-center gap-2">
        {/* <motion.div initial={{rotate: 0}} animate={{rotate: 360}} transition={{ease: easeIn(0.75), bounce: 0.25, type: 'spring', duration: 0.5, repeat: Infinity}} className="h-6 w-6 rotate-45 bg-primary"></motion.div> */}
        <motion.div
          initial={{ rotate: 45, x: 0, y: 0, visibility: 'hidden'}}
          animate={{
            rotate: [45, 405],
            x: [-100, 0],
            y: [-100, 0],
            visibility: 'visible'
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
            times: [0, 1],
          }}
          className="h-6 w-6 bg-primary"
        ></motion.div>
        <Link href='/' className="text-xl font-semibold">BuildJourney</Link>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        <Link
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Features
        </Link>
        <Link
          href="/gallery"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Gallery
        </Link>
        <Link
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Resources
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          Try for free
        </Button>
      </div>
    </nav>
  );
}
