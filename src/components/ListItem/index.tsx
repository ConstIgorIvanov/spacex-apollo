import CapsulesItem from './CapsulesItem';
import DragonsItem from './DragonsItem';
import MissionItem from './MissionItem';

import { Capsule } from '../../types/capsules';
import { Dragon } from '../../types/dragons';
import { Mission } from '../../types/missions';
import { Item } from '../../types/explorer';

interface ListItemProps<T> {
  item: T;
  explorer: string;
  setItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

function ListItem<T>({ item, explorer, setItem }: ListItemProps<T>) {
  switch (explorer) {
    case 'missions':
      return <MissionItem setItem={setItem} item={item as unknown as Mission} />;
    case 'capsules':
      return <CapsulesItem setItem={setItem} item={item as unknown as Capsule} />;
    case 'dragons':
      return <DragonsItem setItem={setItem} item={item as unknown as Dragon} />;
    default:
      return <MissionItem setItem={setItem} item={item as unknown as Mission} />;
  }
}

export default ListItem;
