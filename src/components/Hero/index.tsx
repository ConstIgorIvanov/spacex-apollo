import React from 'react';
import { Item } from '../../types/explorer';

interface HeroProps {
  item?: Item;
}

const Hero: React.FC<HeroProps> = ({ item }) => {
  if (!item) {
    return <div className="hero">Выберите элемент из списка</div>;
  }
  return <div className="hero">index</div>;
};

export default Hero;
