import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CAPSULES } from '../query/getCapsules';

const useCapsules = () => {
  const [item, setItem] = React.useState([]);
  const { data, loading } = useQuery(GET_CAPSULES);

  React.useEffect(() => {
    if (!loading) {
      setItem(data.capsules);
    }
  }, [data]);

  return [item, setItem];
};

export default useCapsules;
