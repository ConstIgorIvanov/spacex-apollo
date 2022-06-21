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
        <div className="hero--main__top">
          <div className="hero--main__element">
            name: <span>{type}</span>
          </div>
          <div className="hero--main__element">
            status: <span>{status}</span>
          </div>
          <div className="hero--main__element">
            id: <span>{id}</span>
          </div>
        </div>
        <div className="hero--main__top">
          <div className="hero--main__element">
            dragon name:
            <span>{dragon.name}</span>
          </div>
          <div className="hero--main__element">
            dragon id:
            <span>{dragon.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapsuleHero;
