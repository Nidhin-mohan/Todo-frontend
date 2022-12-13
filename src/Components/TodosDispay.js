import React from 'react'
import Todolist from './Todolist';
import { useEffect, useState } from "react";

const TodoDispay = () => {
   const [todos, setTodos] = useState("");

   async function fetchData() {
     const response = await fetch("http://localhost:4000/todo/getTodos");
     const data = await response.json();
     setTodos(data.todos);
     console.log(data)
   }

   useEffect(() => {
     fetchData();
     console.log("first")
   }, []);


  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="flex flex-col text-center w-full mb-10">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2   text-white">
            Todos
          </h1>
        </div>

        <div class=" ">
          {todos && <Todolist todos={todos} />}
          </div>
      </section>
    </div>
  );
}

export default TodoDispay