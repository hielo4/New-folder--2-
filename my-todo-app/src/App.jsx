import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListTask from "./components/ListTask";
import AddTask from "./components/AddTask";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ListTask />
      <AddTask />
    </div>
  );
}

export default App;
