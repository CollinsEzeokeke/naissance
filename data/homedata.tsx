import {
    Star,
    Building,
    Shield,
  } from "lucide-react";


export interface HomeCard {
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
  
  export const features = [
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

  const reorderHomes = (homes: HomeCard[]) => {
    return homes;
  };

export const displayedHomes = reorderHomes(galleryHomes);