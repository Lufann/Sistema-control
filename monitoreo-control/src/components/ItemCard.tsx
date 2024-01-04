import React from 'react';

interface ItemCardProps {
  itemData: {
    id: number;
    name: string;
    state?: number;
  };
}

const ItemCard: React.FC<ItemCardProps> = ({ itemData }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '200px', backgroundColor: '#FFEB3B' }}>
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <h5 className="card-title">{`ID: ${itemData.id}`}</h5>
        <span className="card-text">{`Name: ${itemData.name}`}</span>
        {itemData.state !== undefined && (
          <span className="card-text">{`State: ${itemData.state}`}</span>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
