"use client";

import { easeOut, motion } from "framer-motion";
import {
  Heart,
  Home,
  Users,
  Star,
  ChevronRight,
  Building,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";

interface HomeCard {
  id: number;
  image: string;
  title: string;
  description: string;
  family: string;
}

const galleryHomes: HomeCard[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "The Anderson Residence",
    description: "A modern dream home that brings family together",
    family: "The Andersons",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Casa Martinez",
    description: "Where traditions meet modern comfort",
    family: "The Martinez Family",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512917774080-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "The Smith Haven",
    description: "Built with love, filled with memories",
    family: "The Smiths",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "The Park View Estate",
    description: "Where nature meets luxury living",
    family: "The Johnson Family",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Modern Family Haven",
    description: "Contemporary design meets family comfort",
    family: "The Williams Family",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600607687644-c94bf569e48f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Coastal Dream Home",
    description: "Where ocean views meet luxury living",
    family: "The Thompson Family",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Urban Oasis",
    description: "A peaceful retreat in the heart of the city",
    family: "The Garcia Family",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Sunset Villa",
    description: "Where every evening feels magical",
    family: "The Miller Family",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Garden Paradise",
    description: "Living in harmony with nature",
    family: "The Chen Family",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Mountain View Retreat",
    description: "Where every morning brings inspiration",
    family: "The Patel Family",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Lakeside Manor",
    description: "Tranquil living by the water",
    family: "The Wilson Family",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1600566752547-c06a0605567c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Forest Edge Estate",
    description: "Where wilderness meets luxury",
    family: "The Taylor Family",
  },
];

const features = [
  {
    icon: Building,
    title: "Custom Design",
    description:
      "Tailored architecture that reflects your unique style and needs",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Premium materials and expert craftsmanship in every detail",
  },
  {
    icon: Star,
    title: "Satisfaction Guaranteed",
    description: "Join our community of 1000+ satisfied homeowners",
  },
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllHomes, setShowAllHomes] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const reorderHomes = (homes: HomeCard[]) => {
    return homes;
  };

  const displayedHomes = reorderHomes(galleryHomes);

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
            today and discover the stories of families who've built their dreams
            with us
          </p>
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
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-card"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
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

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-card"
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
            className="grid grid-cols-1 md:grid-cols-6 gap-8 auto-rows-auto"
          >
            {displayedHomes.map((home, index) => (
              <motion.div
                key={home.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className={`group relative overflow-hidden rounded-lg shadow-lg bg-card ${
                  index % 6 === 0
                    ? "md:col-span-4 md:row-span-2"
                    : index % 6 === 1 || index % 6 === 2
                    ? "md:col-span-2"
                    : index % 6 === 3
                    ? "md:col-span-4 md:col-start-3 md:row-span-2"
                    : index % 6 === 4 || index % 6 === 5
                    ? "md:col-span-2"
                    : "md:col-span-2"
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    index % 6 === 0 || index % 6 === 3
                      ? "h-64 md:h-[32rem]"
                      : "h-64"
                  }`}
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={home.image}
                    alt={home.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary/90 rounded-full flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Users className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-medium text-primary-foreground">
                        {home.family}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-card-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3
                        className={`font-semibold mb-2 ${
                          index % 6 === 0 || index % 6 === 3
                            ? "text-2xl"
                            : "text-xl"
                        }`}
                      >
                        {home.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {home.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
              onClick={() => setShowAllHomes(true)}
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300"
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
        className="py-20 bg-gradient-to-b from-accent to-background"
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
              Building more than just houses - we're building futures
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
        className="px-4 py-20 text-center bg-gradient-to-b from-card to-background"
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
