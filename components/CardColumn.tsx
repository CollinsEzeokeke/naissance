
import { motion } from "framer-motion";
import CardItem from "./CardItem";
import { Card } from "@/types/card";

interface CardColumnProps {
  columnCards: Card[];
  columnIndex: number;
}

const CardColumn = ({ columnCards, columnIndex }: CardColumnProps) => {
  const isEvenColumn = columnIndex % 2 === 0;
  
  return (
    <div 
      className="min-h-screen sticky top-0"
      style={{
        top: `${columnIndex * 20}vh`
      }}
    >
      <motion.div 
        initial={{ 
          opacity: 0, 
          scale: 0.8,
          rotateX: isEvenColumn ? 45 : -45,
          rotateY: isEvenColumn ? 30 : -30,
          x: isEvenColumn ? 200 : -200,
          y: isEvenColumn ? -100 : 100
        }}
        whileInView={{ 
          opacity: 1,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          x: 0,
          y: 0,
          transition: {
            duration: 1,
            type: "spring",
            bounce: 0.3
          }
        }}
        exit={{ 
          opacity: 0,
          scale: 0.5,
          rotateX: isEvenColumn ? -45 : 45,
          rotateY: isEvenColumn ? -30 : 30,
          x: isEvenColumn ? -200 : 200,
          y: isEvenColumn ? 100 : -100,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: false, margin: "-20%" }}
        className="gap-8 px-8 py-12 perspective-1000 bg-purple-500 grid grid-rows-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {columnCards.map((card, cardIndex) => (
          <CardItem 
            key={card.id}
            card={card}
            columnIndex={columnIndex}
            cardIndex={cardIndex}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CardColumn;
