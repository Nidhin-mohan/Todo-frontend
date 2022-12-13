import React from 'react'


function Todolist({todos}) {
 

  return (
    <div className="flex flex-col justify-center  ">
      {todos.map((todo) => (
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full mx-auto  ">
          <div class="h-full flex text-center items-center border-gray-800 border p-4 rounded-lg ">
            <div class="flex-grow ">
              <h2 class="text-white title-font font- ">
                I am Todo {todo.title}{" "}
              </h2>
              <p class="text-gray-600">I am Task{todo.task} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todolist;