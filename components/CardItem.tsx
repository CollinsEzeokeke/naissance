import { motion } from "framer-motion";
import { Card } from "@/types/card";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

interface CardItemProps {
  card: Card;
  columnIndex: number;
  cardIndex: number;
  isEvenColumn?: boolean;
}

const CardsOnes = ({ card, isEvenColumn, cardIndex }: CardItemProps) => {
  return (<>
    <motion.div
      key={card.id}
      initial={{
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotateX: isEvenColumn ? 30 : -30,
        rotateY: isEvenColumn ? 20 : -20,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 0.8,
          delay: cardIndex * 0.1,
        },
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
        rotateX: isEvenColumn ? -30 : 30,
        rotateY: isEvenColumn ? -20 : 20,
        transition: {
          duration: 0.5,
        },
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 50,
        transition: {
          duration: 0.3,
        },
      }}
      viewport={{ once: false, margin: "-100px" }}
      className="group relative flex-shrink-0 top-0 w-[30vw] transition-all duration-300"
    >
      <CardContainer className="w-full h-[30vw] transition-all duration-300">
        <CardBody className="relative w-full h-full rounded-lg overflow-hidden group transform transition-all duration-300">
          {/* Image Container */}
          <CardItem className="absolute inset-0 w-full h-full">
            <Image
              src={card.image}
              alt={card.title}
              height="1000"
              width="1000"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
          </CardItem>

          {/* Content Container */}
          <CardItem className="relative w-full h-full p-8 flex flex-col justify-end transform transition-all duration-300">
            <div className="transform transition-all duration-300">
              <div className="mb-3 text-base font-medium text-primary/80">
                {card.id.toString().padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-2xl md:text-3xl font-bold text-white">
                {card.title}
              </h3>
              <p className="text-base md:text-lg text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {card.description}
              </p>
              <button
                className="px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md 
                  opacity-0 group-hover:opacity-100 transition-all duration-300 
                  hover:bg-primary/90 transform translate-y-4 group-hover:translate-y-0"
              >
                Learn More
              </button>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  </>);
};

const CardSingle = ({ card, columnIndex, cardIndex }: CardItemProps) => {
  const isEvenColumn = columnIndex % 2 === 0;

  return (
    // <motion.div
    // key={card.id}
    // initial={{
    //   y: 100,
    //   opacity: 0,
    //   scale: 0.8,
    //   rotateX: isEvenColumn ? 30 : -30,
    //   rotateY: isEvenColumn ? 20 : -20,
    // }}
    // whileInView={{
    //   y: 0,
    //   opacity: 1,
    //   scale: 1,
    //   rotateX: 0,
    //   rotateY: 0,
    //   transition: {
    //     type: "spring",
    //     bounce: 0.3,
    //     duration: 0.8,
    //     delay: cardIndex * 0.1,
    //   },
    // }}
    // exit={{
    //   scale: 0.8,
    //   opacity: 0,
    //   rotateX: isEvenColumn ? -30 : 30,
    //   rotateY: isEvenColumn ? -20 : 20,
    //   transition: {
    //     duration: 0.5,
    //   },
    // }}
    // whileHover={{
    //   scale: 1.05,
    //   zIndex: 50,
    //   transition: {
    //     duration: 0.3,
    //   },
    // }}
    // viewport={{ once: false, margin: "-100px" }}
    // className="group relative flex-shrink-0 top-0 w-[30vw] hover:shadow-2xl transition-all duration-300"
    // >
    // <CardContainer className="w-full h-[30vw] transition-all duration-300">
    //   <CardBody className="relative w-full h-full rounded-lg overflow-hidden group transform transition-all duration-300">
    //     {/* Image Container */}
    //     <CardItem className="absolute inset-0 w-full h-full">
    //       <Image
    //         src={card.image}
    //         alt={card.title}
    //         height="1000"
    //         width="1000"
    //         className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    //       />
    //       {/* Overlay gradient */}
    //       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
    //     </CardItem>
    //     {/* Content Container */}
    //     <CardItem className="relative w-full h-full p-8 flex flex-col justify-end transform transition-all duration-300">
    //       <div className="transform transition-all duration-300">
    //         <div className="mb-3 text-base font-medium text-primary/80">
    //           {card.id.toString().padStart(2, "0")}
    //         </div>
    //         <h3 className="mb-3 text-2xl md:text-3xl font-bold text-white">
    //           {card.title}
    //         </h3>
    //         <p className="text-base md:text-lg text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //           {card.description}
    //         </p>
    //         <button
    //           className="px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md 
    //             opacity-0 group-hover:opacity-100 transition-all duration-300 
    //             hover:bg-primary/90 transform translate-y-4 group-hover:translate-y-0"
    //         >
    //           Learn More
    //         </button>
    //       </div>
    //     </CardItem>
    //   </CardBody>
    // </CardContainer>
    // </motion.div>
    // <motion.div
    //         key={card.id}
    //         initial={{
    //           y: 100,
    //           opacity: 0,
    //           scale: 0.8,
    //           rotateX: isEvenColumn ? 30 : -30,
    //           rotateY: isEvenColumn ? 20 : -20,
    //         }}
    //         whileInView={{
    //           y: 0,
    //           opacity: 1,
    //           scale: 1,
    //           rotateX: 0,
    //           rotateY: 0,
    //           transition: {
    //             type: "spring",
    //             bounce: 0.3,
    //             duration: 0.8,
    //             delay: cardIndex * 0.1,
    //           },
    //         }}
    //         exit={{
    //           scale: 0.8,
    //           opacity: 0,
    //           rotateX: isEvenColumn ? -30 : 30,
    //           rotateY: isEvenColumn ? -20 : 20,
    //           transition: {
    //             duration: 0.5,
    //           },
    //         }}
    //         viewport={{ once: false, margin: "-100px" }}
    //         className="group relative flex-shrink-0 top-0 w-[30vw] bg-blue-500" // Modified to take full width and height
    //       >
    //         <CardContainer className="w-full h-[30vw] hover:-z-50 transition-all duration-300">
    //           <CardBody className="relative w-full h-full rounded-lg overflow-hidden group">
    //             {/* Image Container */}
    //             <CardItem className="absolute inset-0 w-full h-full">
    //               <Image
    //                 src={card.image}
    //                 alt={card.title}
    //                 height="1000"
    //                 width="1000"
    //                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    //               />
    //               {/* Overlay gradient */}
    //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
    //             </CardItem>
    //             {/* Content Container */}
    //             <CardItem className="relative w-full h-full p-8 flex flex-col justify-end">
    //               <div className="transform transition-all duration-300">
    //                 <div className="mb-3 text-base font-medium text-primary/80">
    //                   {card.id.toString().padStart(2, "0")}
    //                 </div>
    //                 <h3 className="mb-3 text-2xl md:text-3xl font-bold text-white">
    //                   {card.title}
    //                 </h3>
    //                 <p className="text-base md:text-lg text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //                   {card.description}
    //                 </p>
    //                 <button
    //                   className="px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md
    //             opacity-0 group-hover:opacity-100 transition-all duration-300
    //             hover:bg-primary/90 transform translate-y-4 group-hover:translate-y-0"
    //                 >
    //                   Learn More
    //                 </button>
    //               </div>
    //             </CardItem>
    //           </CardBody>
    //         </CardContainer>
    //       </motion.div>
    // <motion.div
    //   key={card.id}
    //   initial={{
    //     y: 100,
    //     opacity: 0,
    //     scale: 0.8,
    //     rotateX: isEvenColumn ? 30 : -30,
    //     rotateY: isEvenColumn ? 20 : -20,
    //   }}
    //   whileInView={{
    //     y: 0,
    //     opacity: 1,
    //     scale: 1,
    //     rotateX: 0,
    //     rotateY: 0,
    //     transition: {
    //       type: "spring",
    //       bounce: 0.3,
    //       duration: 0.8,
    //       delay: cardIndex * 0.1,
    //     },
    //   }}
    //   exit={{
    //     scale: 0.8,
    //     opacity: 0,
    //     rotateX: isEvenColumn ? -30 : 30,
    //     rotateY: isEvenColumn ? -20 : 20,
    //     transition: {
    //       duration: 0.5,
    //     },
    //   }}
    //   viewport={{ once: false, margin: "-100px" }}
    //   className="group relative flex-shrink-0 w-[20vw] h-[50vh] overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl perspective-1000"
    // >
    //   <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/0" />
    // <div className="relative h-[200px] overflow-hidden">
    //   <img
    //     src={card.image}
    //     alt={card.title}
    //     className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    //   />
    // </div>
    // <div className="p-6">
    //   <div className="mb-3 text-sm font-medium text-purple-600 opacity-80">
    //     {card.id.toString().padStart(2, "0")}
    //   </div>
    //   <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-900">
    //     {card.title}
    //   </h3>
    //   <p className="text-sm text-gray-600">{card.description}</p>
    // </div>
    //   <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    // </motion.div>
    (<>
      <CardsOnes
        isEvenColumn={isEvenColumn}
        card={card}
        cardIndex={cardIndex}
        columnIndex={columnIndex}
      />
    </>)
  );
};

export default CardSingle;

//  <motion.div
// key={card.id}
// initial={{
//   y: 100,
//   opacity: 0,
//   scale: 0.8,
//   rotateX: isEvenColumn ? 30 : -30,
//   rotateY: isEvenColumn ? 20 : -20,
// }}
// whileInView={{
//   y: 0,
//   opacity: 1,
//   scale: 1,
//   rotateX: 0,
//   rotateY: 0,
//   transition: {
//     type: "spring",
//     bounce: 0.3,
//     duration: 0.8,
//     delay: cardIndex * 0.1,
//   },
// }}
// exit={{
//   scale: 0.8,
//   opacity: 0,
//   rotateX: isEvenColumn ? -30 : 30,
//   rotateY: isEvenColumn ? -20 : 20,
//   transition: {
//     duration: 0.5,
//   },
// }}
// viewport={{ once: false, margin: "-100px" }}
// className="group relative flex-shrink-0 bg-red-500 h-[20vh]"
// >
// <CardContainer className="h-full w-full">
//   <CardBody className="relative h-full w-full rounded-lg overflow-hidden group">
//     {/* Image Container */}
//     <CardItem className="absolute inset-0 w-full h-full">
//       <Image
//         src={card.image}
//         alt={card.title}
//         height="1000"
//         width="1000"
//         className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//       />
//       {/* Overlay gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
//     </CardItem>

//     {/* Content Container */}
//     <CardItem className="relative h-full w-full p-6 flex flex-col justify-end">
//       <div className="transform transition-all duration-300">
//         <div className="mb-2 text-sm font-medium text-primary/80">
//           {card.id.toString().padStart(2, "0")}
//         </div>
//         <h3 className="mb-2 text-xl font-semibold text-white">
//           {card.title}
//         </h3>
//         <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           {card.description}
//         </p>
//         <button
//           className="px-4 py-2 bg-primary text-primary-foreground rounded-md
//   opacity-0 group-hover:opacity-100 transition-all duration-300
//   hover:bg-primary/90 transform translate-y-4 group-hover:translate-y-0"
//         >
//           Learn More
//         </button>
//       </div>
//     </CardItem>
//   </CardBody>
// </CardContainer>
// </motion.div>
