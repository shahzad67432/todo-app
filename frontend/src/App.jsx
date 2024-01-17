import { useState } from "react";
import AddTodo from "./components/AddTodo";

function App() {
  const [todo, setTodo] = useState([])
  return ( 
    <>
      <AddTodo setTodo={setTodo}/>
      <div>
      {todo.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
}
export default App;