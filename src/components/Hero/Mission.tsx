import React from 'react';
import { Mission } from '../../types/missions';

interface MissionProps {
  item: Mission;
}

const MissionHero: React.FC<MissionProps> = ({ item }) => {
  const { name, id, description, website, wikipedia } = item;
  return (
    <div className="hero">
      <div className="hero--main">
        <div>
          <div>
            name: <span>{name}</span>
          </div>
          <div>
            id: <span>{id}</span>
          </div>
        </div>
        <div>
          <div>
            <span>{description}</span>
          </div>
          <div>
            website:{' '}
            <a href={website} target="_blank" rel="noreferrer">
              {website}
            </a>
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

export default MissionHero;
