import React from 'react';
import { Capsule } from '../../types/capsules';

interface CapsulesItemProps {
  item: Capsule;
}

const CapsulesItem: React.FC<CapsulesItemProps> = ({ item }) => {
  return (
    <div className="list--main__item">
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
