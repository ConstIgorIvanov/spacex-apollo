import React from 'react';
import { Explorer } from '../../types/explorer';
import Explorers from './Explorers';

interface SelectProps {
  explorer: string;
  setExplorer: React.Dispatch<React.SetStateAction<Explorer>>;
}
const Select: React.FC<SelectProps> = ({ explorer, setExplorer }) => {
  return (
    <>
      <Explorers explorer={explorer} setExplorer={setExplorer} />
    </>
  );
};

export default Select;
