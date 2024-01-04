import React from 'react';
import { Carousel } from 'react-bootstrap';
import ItemCard from './ItemCard';

interface ItemListProps {
  items: {
    id: number;
    name: string;
    state?: number;
  }[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const chunkSize = 3;

  const chunkedItems = items.reduce(
    (resultArray, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    [] as { id: number; name: string; state?: number }[][]
  );

  return (
    <Carousel>
      {chunkedItems.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-between">
            {chunk.map((item) => (
              <ItemCard key={item.id} itemData={item} />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ItemList;
