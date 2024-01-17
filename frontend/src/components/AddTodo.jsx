import { useState } from "react";

export default function AddTodo({ setTodo }) {
    const [newTodo, setNewTodo] = useState("");
  
    const addTodo = () => {
      setTodo((prevTodo) => [...prevTodo, newTodo]);
      setNewTodo("");
    };

  return(
    <>
      <input type="text" placeholder="enter you text" value={newTodo} onChange={(e)=>{
        setNewTodo(e.target.value)
      }}/>
      <button onClick={addTodo}>Add Todo</button>
      {/* <button >delete</button> */}

    </>
  )
}