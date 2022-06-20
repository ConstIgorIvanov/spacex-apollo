import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_CAPSULES } from '../query/getCapsules';
import { GET_DRAGONS } from '../query/getDragons';
import { GET_MISSIONS } from '../query/getMissions';

import { Explorer, Item } from '../types/explorer';
import { Mission } from '../types/missions';
import { Capsule } from '../types/capsules';
import { Dragon } from '../types/dragons';

const useItems = (explorer: Explorer): [Item[], Function, Function] => {
  const [item, setItem] = React.useState<Item[]>([] as Item[]);

  const getExp = () => {
    switch (explorer) {
      case 'missions':
        return GET_MISSIONS;
      case 'capsules':
        return GET_CAPSULES;
      case 'dragons':
        return GET_DRAGONS;
      default:
        return GET_MISSIONS;
    }
  };

  const getItem = () => {
    switch (explorer) {
      case 'missions':
        return data.missions as Mission[];
      case 'capsules':
        return data.capsules as Capsule[];
      case 'dragons':
        return data.dragons as Dragon[];
      default:
        return data.missions as Mission[];
    }
  };

  const { data, loading, refetch } = useQuery(getExp());

  React.useEffect(() => {
    if (!loading) {
      setItem(getItem());
    }
  }, [data]);

  return [item, setItem, refetch];
};

export default useItems;
