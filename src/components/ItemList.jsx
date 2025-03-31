import React from "react";
import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
  if (!items || items.length === 0) {
    return <p>No items available.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
