import React from 'react';

import { Mission } from '../../types/explorer';

interface MissionProps {
  item: Mission;
}

const MissionHero: React.FC<MissionProps> = ({ item }) => {
  const { name, id, description, website, wikipedia } = item;
  return (
    <div className="hero">
      <div className="hero--main">
        <div className="hero--main__top">
          <div className="hero--main__element">
            name: <span>{name}</span>
          </div>
          <div className="hero--main__element">
            id: <span>{id}</span>
          </div>
        </div>
        <div className="hero--main__bottom">
          <div className="hero--main__element">
            <span>{description}</span>
          </div>
          <div className="hero--main__element">
            website:{' '}
            <a href={website} target="_blank" rel="noreferrer">
              {website}
            </a>
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

export default MissionHero;
