import React from 'react';
import { Explorer } from '../../types/explorer';
import Select from '../Select';

interface ListProps<T> {
  items: T[];
  explorer: string;
  setExplorer: React.Dispatch<React.SetStateAction<Explorer>>;
  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return (
    <div className="list">
      <div className="list--top">
        <Select explorer={props.explorer} setExplorer={props.setExplorer} />
      </div>
      <div className="list--main__container"> {props.items.map(props.renderItem)}</div>
    </div>
  );
}

export default List;
