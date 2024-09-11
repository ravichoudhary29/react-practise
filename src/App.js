import { useState } from "react";
import "./App.css";

let newId = 3;
const initialVal = [
  { id: 1, name: "grapes" },
  { id: 2, name: "apple" },
];

function App() {
  const [data, setData] = useState(initialVal);

  const handleDelete = (id) => {
    setData((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };

  const handleAdd = (value) => {
    setData((prev) => [
      ...prev,
      {
        id: newId++,
        name: value,
      },
    ]);
  };
  console.log(data);
  return (
    <div className="App">
      <NewFruit onAdd={handleAdd} />
      <ul>
        {data.map((el) => {
          return (
            <li key={el.id}>
              {el.name}
              <button key={el.id} onClick={() => handleDelete(el.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const NewFruit = ({ onAdd }) => {
  const [fruit, setFruit] = useState("");
  return (
    <div>
      <input value={fruit} onChange={(e) => setFruit(e.target.value)} />
      <button onClick={() => onAdd(fruit)}>Add</button>
    </div>
  );
};

export default App;
