import { useState } from "react";

export default function AddTodo({ setTodo }) {
    const [newTodo, setNewTodo] = useState("");
  
    const addTodo = () => {
      setTodo((prevTodo) => [...prevTodo, {text:newTodo, completed:false}]);
      setNewTodo("");
    };

  return(
    <>
      <input type="text" placeholder="enter you text" value={newTodo} onChange={(e)=>{
        setNewTodo(e.target.value)
      }}/>
      <button onClick={addTodo}>Add Todo</button>

    </>
  )
}