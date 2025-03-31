const Item = ({ item, onDelete }) => {
    return (
      <div className="item-card">
        <p>{item.name}</p>
        <button onClick={() => onDelete(item.id)}>Delete</button>
        <button>Edit</button>
      </div>
    );
  };
  
  export default Item;
  