import { useState } from "react";
import AddTodo from "./components/AddTodo";


function App() {
  const [todo, setTodo] = useState([])

  function deleteTodo(index){
    const updateTodo = [...todo]
    updateTodo.splice(index, 1)
    setTodo(updateTodo)
  }

  const toggleTodo = (index)=>{
      const updateTodo = [...todo]
      updateTodo[index].completed = ! updateTodo[index].completed
      setTodo(updateTodo)
  }


  return ( 
    <>
      <AddTodo setTodo={setTodo}/>
      <div>
        <ul>
          {todo.map((item, index) => (  
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
              <span 
                style={{textDecoration: item.completed ? "line-through" : 'none'}}>
                {item.text}
              </span>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default App;