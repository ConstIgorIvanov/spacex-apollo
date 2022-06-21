import React from 'react';
import { Dragon } from '../../types/dragons';

interface DragonProps {
  item: Dragon;
}

const DragonHero: React.FC<DragonProps> = ({ item }) => {
  const { name, active, type, id, description, wikipedia } = item;
  return (
    <div className="hero">
      <div className="hero--main">
        <div className="hero--main__top">
          <div className="hero--main__element">
            name: <span>{name}</span>
          </div>
          <div className="hero--main__element">
            active: <span>{String(active)}</span>
          </div>
          <div className="hero--main__element">
            id: <span>{id}</span>
          </div>
        </div>
        <div className="hero--main__bottom">
          <div className="hero--main__element">
            type:
            <span>{type}</span>
          </div>
          <div className="hero--main__element">
            <span>{description}</span>
          </div>

          <div className="hero--main__element">
            wikipedia:{' '}
            <a href={wikipedia} target="_blank" rel="noreferrer">
              {wikipedia}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonHero;
