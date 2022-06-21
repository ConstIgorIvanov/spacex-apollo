import React from 'react';

import { Explorer, Item } from './types/explorer';

import useItems from './hooks/useItems';

import Header from './components/Header';
import Hero from './components/Hero';
import List from './components/List';
import ListItem from './components/ListItem';

import './scss/app.scss';

const App: React.FC = () => {
  const [explorer, setExplorer] = React.useState<Explorer>(Explorer.missions);
  const [items] = useItems(explorer || Explorer.missions);
  const [item, setItem] = React.useState<Item | null>(null);

  return (
    <div className="container">
      <Header></Header>
      <div className="main">
        <List
          setItem={setItem}
          setExplorer={setExplorer}
          explorer={explorer || Explorer.missions}
          items={items}
          renderItem={(user) => <ListItem setItem={setItem} explorer={explorer} item={user} />}
        />
        <Hero item={item} explorer={explorer} />
      </div>
    </div>
  );
};

export default App;
