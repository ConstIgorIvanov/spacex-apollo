import React from 'react';

import { Item, Mission } from '../../types/explorer';

interface MissionItemProps {
  item: Mission;
  setItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

const MissionItem: React.FC<MissionItemProps> = ({ item, setItem }) => {
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

export default MissionItem;
