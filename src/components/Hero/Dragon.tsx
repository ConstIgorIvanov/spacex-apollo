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
        <div>
          <div>
            name: <span>{name}</span>
          </div>
          <div>
            active: <span>{active}</span>
          </div>
          <div>
            id: <span>{id}</span>
          </div>
        </div>
        <div>
          <div>
            type:
            <span>{description}</span>
          </div>
          <div>
            <span>{description}</span>
          </div>

          <div>
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
