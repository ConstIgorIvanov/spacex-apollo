import React from 'react';

import { Item, Capsule } from '../../types/explorer';

interface CapsulesItemProps {
  item: Capsule;
  setItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

const CapsulesItem: React.FC<CapsulesItemProps> = ({ item, setItem }) => {
  return (
    <div className="list--main__item" onClick={() => setItem(item)}>
      <div>
        Type:
        <span>{item.type}</span>{' '}
      </div>
      <div>
        id:
        <span> {item.id}</span>
      </div>
    </div>
  );
};

export default CapsulesItem;
