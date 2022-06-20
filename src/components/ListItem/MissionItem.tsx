import React from 'react';
import { Mission } from '../../types/missions';

interface MissionItemProps {
  item: Mission;
}

const MissionItem: React.FC<MissionItemProps> = ({ item }) => {
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

export default MissionItem;
