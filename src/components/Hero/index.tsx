import React from 'react';

import { Capsule, Dragon, Item, Mission } from '../../types/explorer';

import CapsuleHero from './Capsule';
import DragonHero from './Dragon';
import MissionHero from './Mission';

interface HeroProps {
  item: Item | null;
  explorer: string;
}

const Hero: React.FC<HeroProps> = ({ item, explorer }) => {
  if (!item) {
    return (
      <div className="hero">
        <div className="hero--top">Select an item from the list</div>
      </div>
    );
  }

  switch (explorer) {
    case 'missions':
      return <MissionHero item={item as Mission} />;
    case 'capsules':
      return <CapsuleHero item={item as Capsule} />;
    case 'dragons':
      return <DragonHero item={item as Dragon} />;
    default:
      return <MissionHero item={item as Mission} />;
  }
};

export default Hero;
