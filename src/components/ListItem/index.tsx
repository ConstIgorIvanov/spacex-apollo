import CapsulesItem from './CapsulesItem';
import DragonsItem from './DragonsItem';
import MissionItem from './MissionItem';

import { Capsule } from '../../types/capsules';
import { Dragon } from '../../types/dragons';
import { Mission } from '../../types/missions';

interface ListItemProps<T> {
  item: T;
  explorer: string;
}

function ListItem<T>({ item, explorer }: ListItemProps<T>) {
  switch (explorer) {
    case 'missions':
      return <MissionItem item={item as unknown as Mission} />;
    case 'capsules':
      return <CapsulesItem item={item as unknown as Capsule} />;
    case 'dragons':
      return <DragonsItem item={item as unknown as Dragon} />;
    default:
      return <MissionItem item={item as unknown as Mission} />;
  }
}

export default ListItem;
