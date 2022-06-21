import React from 'react';

import { Explorer, Item } from '../../types/explorer';

import Explorers from './Explorers';

interface SelectProps {
  explorer: string;
  setExplorer: React.Dispatch<React.SetStateAction<Explorer>>;
  setItem: React.Dispatch<React.SetStateAction<Item | null>>;
}
const Select: React.FC<SelectProps> = ({ explorer, setExplorer, setItem }) => {
  return (
    <>
      <Explorers setItem={setItem} explorer={explorer} setExplorer={setExplorer} />
    </>
  );
};

export default Select;
