import React from 'react'
import axios from "axios";
import Todolist from './Todolist';
import { useEffect, useState } from "react";

const TodoDispay = () => {
   const [todos, setTodos] = useState("");

     const fetchUsersData = async () => {
       const resp = await axios.get(`http://localhost:4000/todo/getTodos`);

       setTodos(resp.data.todos);
     };

  

   useEffect(() => {
     fetchUsersData();
     console.log("useeffect calling fetch data")
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