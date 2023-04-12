import { useState } from 'react';
import './ListGroup.css';

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// function ListGroup(props: ListGroupProps) {
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // state Hook
  // the useState function returns an array with two variables
  //   variable 1 is the state variable
  //   variable 2 is the updater function
  //  -1 is the intial value of selectedIndex
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1> {heading} </h1>
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
