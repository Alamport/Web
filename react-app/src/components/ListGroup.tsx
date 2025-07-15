// import { MouseEvent } from "react";
import { useState } from "react";

/**
 * I don't understand managing state (50min)
 */

// {items: [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // similar to onClick
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // // let selectedIndex = -1;
  // // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // }

  // Event handler
  // x: y is called type annotation
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      {/* nothing will be rendered if the cond. is false */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            // onClick={handleClick}
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
