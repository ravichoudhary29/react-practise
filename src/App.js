import { useState } from "react";
import "./App.css";

const initialVal = [
  { id: 1, name: "grapes" },
  { id: 2, name: "apple" },
];

function App() {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleUpdate = (id) => {
    setSelectedIds((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      } else {
        return prev.filter((t) => t !== id);
      }
    });
  };

  // console.log(selectedIds);

  const result = initialVal.filter((obj) => {
    return selectedIds.map((t) => {
      return obj.id === t;
    });
  });
  console.log(result);
  return (
    <div>
      <ul>
        {initialVal.map((t) => {
          return (
            <button key={t.id} onClick={() => handleUpdate(t.id)}>
              {t.name}
            </button>
          );
        })}
      </ul>
      <h3>You selected: {}</h3>
    </div>
  );
}

export default App;
