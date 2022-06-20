import React from 'react';
import { Dragon } from '../../types/dragons';

interface DragonItemProps {
  item: Dragon;
}

const DragonsItem: React.FC<DragonItemProps> = ({ item }) => {
  return (
    <div className="list--main__item">
      <div>
        name:
        <span>{item.name}</span>{' '}
      </div>
      <div>
        id:
        <span> {item.id}</span>
      </div>
    </div>
  );
};
export default DragonsItem;
