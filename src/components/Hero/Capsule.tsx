import React from 'react';
import { Capsule } from '../../types/capsules';

interface CapsuleProps {
  item: Capsule;
}

const CapsuleHero: React.FC<CapsuleProps> = ({ item }) => {
  const { status, type, id, dragon } = item;
  return (
    <div className="hero">
      <div className="hero--main">
        <div>
          <div>
            name: <span>{type}</span>
          </div>
          <div>
            status: <span>{status}</span>
          </div>
          <div>
            id: <span>{id}</span>
          </div>
        </div>
        <div>
          <div>
            <span>{dragon.id}</span>
            <span>{dragon.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapsuleHero;
