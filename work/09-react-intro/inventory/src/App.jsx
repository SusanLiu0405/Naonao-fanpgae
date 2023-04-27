import './App.css';
import { useState } from 'react';
import Reorder from './Reorder';
function App() {
  let [count, setCount] = useState(1);
  function addInventory() {
    setCount(count = count + 1);
  }
  function reduceInventory() {
    setCount(count = count - 1);
  }

  function reorderFiveMore() {
    setCount(5);
  }
  return (
    <div className="app">
      <p>Current Inventory: {count}</p>
      <button className="button-add" onClick={addInventory} disabled={!count}> + </button>
      <button className="button-reduce" onClick={reduceInventory} disabled={!count}> - </button>

      {
        count === 0 ? <Reorder onReorder={reorderFiveMore} /> : <></>
      }
    </div>
  );
}

export default App;
