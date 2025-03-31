import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]); // State to store items
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Fetch items from the server when the component mounts
  useEffect(() => {
    fetch(API_URI)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Delete an item
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, { method: "DELETE" });

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      // Update state to remove the deleted item
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Doors List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <ItemList items={items} onDelete={deleteItem} />}
    </div>
  );
}

export default App;

