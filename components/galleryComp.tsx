"use client";

import { motion } from "framer-motion";
import { Heart, Home, Users, ChevronRight, ArrowUpRight } from "lucide-react";
import { WorldMapDemo } from "./worldJam";
import { features, displayedHomes, HomeCard } from "@/data/homedata";
import { useState } from "react";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };


  // Function to chunk array into groups of 3
  const chunkArray = (arr: HomeCard[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };
  const [visibleItems, setVisibleItems] = useState(12);

  const loadMore = () => {
  // Ensure we don't exceed available items
  setVisibleItems(prev => Math.min(prev + 12, displayedHomes.length));
  };
  
  // Get current items and chunk them
  const currentItems = displayedHomes.slice(0, visibleItems);
  const HomeDisplay = chunkArray(currentItems, 3);
  console.log(HomeDisplay);

  return (
    <div className="min-h-screen bg-background">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative px-4 py-32 text-center bg-gradient-to-b from-accent to-background"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Celebrating Our Community
          </span>
          <h1 className="mb-6 text-6xl font-bold tracking-tight text-foreground">
            Happy Homes, Happy Lives
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-muted-foreground">
            Begin your{" "}
            <span className="text-primary font-semibold">Build Journey</span>{" "}
            today and discover the stories of families who&apos;ve built their
            dreams with us
          </p>
          {/* thripple dotted things in the top */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <motion.div className="w-2 h-2 rounded-full bg-primary" />
            <motion.div className="w-2 h-2 rounded-full bg-primary/80" />
            <motion.div className="w-2 h-2 rounded-full bg-primary/60" />
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-card relative h-[50vh]" // Changed to relative positioning and set fixed height
      >
        {/* Background Map Component */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <WorldMapDemo />
        </div>

        {/* Stats Grid Overlay */}
        <div className="relative grid grid-cols-1 -mx-7 md:grid-cols-3 gap-8 w-full h-full z-10">
          <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">1,000+</h3>
            <p className="text-muted-foreground">Happy Families</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
            <p className="text-muted-foreground">Cities Served</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">15 Years</h3>
            <p className="text-muted-foreground">of Excellence</p>
          </motion.div>
        </div>
      </motion.section>
      <div className="h-[50vh]" />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 -my-20 bg-[#000000]/65"
        // bg-card
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Our Gallery
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Celebrating Happy Homes
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our collection of beautiful homes and happy families
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // md:grid-cols-6          grid grid-cols-6 gap-8 auto-rows-auto
            className="flex flex-col gap-8"
          >
            {HomeDisplay.map((group, groupIndex) => (
              <div key={groupIndex} className="flex gap-8 h-[600px]">
                {groupIndex % 2 === 0 ? (
                  //even items on the right
                  <>
                    <div className="w-1/3 flex flex-col gap-8">
                      {group.slice(0, 2).map((home) => (
                        <>
                          <motion.div
                            key={home.id}
                            variants={itemVariants}
                            whileHover={{
                              scale: 1.03,
                              transition: { duration: 0.2 },
                            }}
                            // bg-background
                            className={`group relative overflow-hidden rounded-lg shadow-lg `}
                          >
                            <div
                              className={`relative w-full overflow-hidden h-72
                    `}
                            >
                              <div className="h-full w-full rounded-2xl">
                                <motion.img
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.6 }}
                                  src={home.image}
                                  alt={home.title}
                                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                                />
                              </div>
                            </div>

                            {/* this part is not visible until hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                              <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary/90 rounded-full flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <Users className="w-4 h-4 text-primary-foreground" />
                                <span className="text-sm font-medium text-primary-foreground">
                                  {home.family}
                                </span>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-card-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className={`font-black mb-2 text-2xl`}>
                                  {home.title}
                                </h3>
                                <div className="w-2/3">
                                  <p className="text-sm text-muted-foreground">
                                    {home.description}
                                  </p>
                                </div>
                              </div>
                              <div className="bg-[#010308] text-primary-foreground absolute right-0 bottom-0 h-[7vh] w-[8vh] flex items-center justify-center rounded-tl-[2rem] corner-effect">
                                {" "}
                                <div className="bg-primary/70 h-1/2 w-1/2 flex items-center justify-center rounded-[4rem] ">
                                  <ArrowUpRight className="text-3xl font-extrabold" />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      ))}
                    </div>

                    {/* this is the part where the user has them bigger images for easier access */}
                    {group[2] && (
                      <motion.div
                        variants={itemVariants}
                        whileHover={{
                          transition: { duration: 0.2 },
                        }}
                        // bg-background
                        className="group relative overflow-hidden rounded-lg shadow-lg w-2/3 group"
                      >
                        <div className="h-full w-full rounded-2xl">
                          <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            src={group[2].image}
                            alt={group[2].title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                          />
                        </div>
                        {/* here is the part that is very important in the place i need */}

                        <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                          <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary/90 rounded-full flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <Users className="w-4 h-4 text-primary-foreground" />
                            <span className="text-sm font-medium text-primary-foreground">
                              {group[2].family}
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-card-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className={`mb-2 text-4xl font-black`}>
                              {group[2].title}
                            </h3>
                            <p className="text-lg text-muted-foreground">
                              {group[2].description}
                            </p>
                          </div>
                          <div className="bg-[#010308] text-primary-foreground absolute right-0 bottom-0 h-40 w-40 flex items-center justify-center rounded-tl-[2rem] corner-effect">
                            {" "}
                            <div className="bg-primary/70 h-1/2 w-1/2 flex items-center justify-center rounded-[4rem] ">
                              <ArrowUpRight className="text-3xl font-extrabold" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <>
                    {group[0] && (
                      <motion.div
                        variants={itemVariants}
                        whileHover={{
                          transition: { duration: 0.2 },
                        }}
                        // bg-background
                        className="group relative overflow-hidden rounded-lg shadow-lg w-2/3 group"
                      >
                        <div className="h-full w-full rounded-2xl">
                          <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            src={group[0].image}
                            alt={group[0].title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                          />
                        </div>
                        {/* here is the part that is very important in the place i need */}

                        <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                          <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary/90 rounded-full flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <Users className="w-4 h-4 text-primary-foreground" />
                            <span className="text-sm font-medium text-primary-foreground">
                              {group[0].family}
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-card-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className={`mb-2 text-4xl font-black`}>
                              {group[0].title}
                            </h3>
                            <p className="text-lg text-muted-foreground">
                              {group[0].description}
                            </p>
                          </div>
                          <div className="bg-[#010308] text-primary-foreground absolute right-0 bottom-0 h-40 w-40 flex items-center justify-center rounded-tl-[2rem] corner-effect">
                            {" "}
                            <div className="bg-primary/70 h-1/2 w-1/2 flex items-center justify-center rounded-[4rem] ">
                              <ArrowUpRight className="text-3xl font-extrabold" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div className="w-1/3 flex flex-col gap-8">
                      {group.slice(1, 3).map((home) => (
                        <>
                          <motion.div
                            key={home.id}
                            variants={itemVariants}
                            whileHover={{
                              scale: 1.03,
                              transition: { duration: 0.2 },
                            }}
                            // bg-background
                            className={`group relative overflow-hidden rounded-lg shadow-lg `}
                          >
                            <div
                              className={`relative w-full overflow-hidden h-72
                    `}
                            >
                              <div className="h-full w-full rounded-2xl">
                                <motion.img
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.6 }}
                                  src={home.image}
                                  alt={home.title}
                                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                                />
                              </div>
                            </div>

                            {/* this part is not visible until hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                              <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary/90 rounded-full flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <Users className="w-4 h-4 text-primary-foreground" />
                                <span className="text-sm font-medium text-primary-foreground">
                                  {home.family}
                                </span>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-card-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className={`font-black mb-2 text-2xl`}>
                                  {home.title}
                                </h3>
                                <div className="w-2/3">
                                  <p className="text-sm text-muted-foreground">
                                    {home.description}
                                  </p>
                                </div>
                              </div>
                              <div className="bg-[#010308] text-primary-foreground absolute right-0 bottom-0 h-[7vh] w-[8vh] flex items-center justify-center rounded-tl-[2rem] corner-effect">
                                {" "}
                                <div className="bg-primary/70 h-1/2 w-1/2 flex items-center justify-center rounded-[4rem] ">
                                  <ArrowUpRight className="text-3xl font-extrabold" />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300"
              onClick={loadMore}
            >
              View All Homes
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-b from-[#000000] to-background"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
              The Build Journey Experience
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Building more than just houses - we&apos;re building futures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-20 text-center bg-gradient-to-b from-background to-card"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-full"
          >
            <Heart className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Your Dream Home Awaits
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Join our community of happy homeowners and start your journey to the
            perfect home
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Start Your Journey
            <ChevronRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Index;
