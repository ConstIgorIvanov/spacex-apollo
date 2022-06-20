import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import List from './components/List';
import ListItem from './components/ListItem';

import useItems from './hooks/useItems';

import { Explorer, Item } from './types/explorer';
import { Company } from './types/company';

import './scss/app.scss';

const App: React.FC = () => {
  const [explorer, setExplorer] = React.useState<Explorer>(Explorer.missions);
  const [items, setItems, refetch] = useItems(explorer || Explorer.missions);
  const [item, setItem] = React.useState<Item>();

  return (
    <div className="container">
      <Header company={{} as Company}></Header>
      <div className="main">
        <List
          setExplorer={setExplorer}
          explorer={explorer || Explorer.missions}
          items={items}
          renderItem={(user) => <ListItem explorer={explorer || Explorer.missions} item={user} />}
        />
        <Hero item={item} />
      </div>
    </div>
  );
};

export default App;
