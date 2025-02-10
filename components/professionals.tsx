import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Professionals() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Architecture is not about space but about time. It's about creating moments that stay with people forever.",
      name: "Frank Gehry",
      designation: "Founder, Gehry Partners LLP",
      src: "https://iaa-ngo.com/wp-content/uploads/2019/02/gehry_web-824x549-1024x1024.jpg",
    },
    {
      quote:
        "Less is more. Architecture is the thoughtful making of space. It's the creating of spaces that evoke a feeling of appropriate belonging.",
      name: "Zaha Hadid",
      designation: "Founder, Zaha Hadid Architects",
      src: "https://www.designcurial.com/Uploads/NewsArticle/4853858/main.jpg",
    },
    {
      quote:
        "Design should never say, 'Look at me.' It should always say, 'Look at this.' Good design is making something intelligible and memorable.",
      name: "Kelly Wearstler",
      designation: "Founder, Kelly Wearstler Interior Design",
      src: "https://media.architecturaldigest.com/photos/57a9f955cfc37bc171ad7fbd/16:9/w_1920%2Cc_limit/kelly-wearstler-b.jpg",
    },
    {
      quote:
        "Architecture is really about well-being. I think that people want to feel good in a space.",
      name: "Norman Foster",
      designation: "Founder, Foster + Partners",
      src: "https://th.bing.com/th/id/OSK.HERO0jIKPYnEibDyV23dXv_EhPHix73q0Oq6zBfyEBw6dQw?rs=1&pid=ImgDetMain",
    },
    {
      quote:
        "The details are not the details. They make the design. A room should never allow the eye to settle in one place.",
      name: "Philippe Starck",
      designation: "Founder, Starck Network",
      src: "https://www.nostraforma.com/media/cache/1400x1400/philippe-starck_d84e72590c7f2372bae2cda58e292008.webp",
    },
    {
      quote:
        "Architecture is a visual art, and the buildings speak for themselves. The future of architecture is culture.",
      name: "Bjarke Ingels",
      designation: "Founder, BIG (Bjarke Ingels Group)",
      src: "https://th.bing.com/th/id/OSK.HEROtUS2qQGJ0DGsBjaPEg09KAOa9uu3gx31jTmsOf6pTOA?rs=1&pid=ImgDetMain",
    },
    {
      quote:
        "Home is where we should feel secure and comfortable. The best rooms have something to say about the people who live in them.",
      name: "Nate Berkus",
      designation: "Founder, Nate Berkus Associates",
      src: "https://th.bing.com/th/id/OIP.H80ZzlH2p3f-oXCvJbtJYAHaLH?rs=1&pid=ImgDetMain",
    },
    {
      quote:
        "Good buildings come from good people, and all problems are solved by good design.",
      name: "Stephen Gardiner",
      designation: "Renowned Architectural Historian",
      src: "https://th.bing.com/th/id/R.9e3e93fc67c3a02b6456f48c9aacfb90?rik=7fmC8qyD1es5TQ&pid=ImgRaw&r=0",
    },
    {
      quote:
        "Design is not just what it looks like and feels like. Design is how it works. The space within becomes the reality of the building.",
      name: "Tadao Ando",
      designation: "Founder, Tadao Ando Architect & Associates",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Tadao_Ando_2004.jpg",
    },
    {
      quote:
        "Architecture should speak of its time and place, but yearn for timelessness. It's about creating spaces that enhance human life.",
      name: "Renzo Piano",
      designation: "Founder, Renzo Piano Building Workshop",
      src: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/10/2017/09/80-anni-renzo-piano.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
