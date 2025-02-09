
import { Card } from "@/types/card";

export const createColumns = (cards: Card[]) => {
  const columns = [];
  const cardsPerColumn = 4;
  
  for (let i = 0; i < 5; i++) {
    const columnCards = cards.slice(i * cardsPerColumn, (i + 1) * cardsPerColumn);
    columns.push(columnCards);
  }
  
  return columns;
};
