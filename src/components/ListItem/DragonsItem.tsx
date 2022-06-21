import React from 'react';
import { Dragon } from '../../types/dragons';
import { Item } from '../../types/explorer';

interface DragonItemProps {
  item: Dragon;
  setItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

const DragonsItem: React.FC<DragonItemProps> = ({ item, setItem }) => {
  return (
    <div className="list--main__item" onClick={() => setItem(item)}>
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
