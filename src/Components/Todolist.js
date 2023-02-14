import React from 'react'


function Todolist({todos}) {
 

  return (
    <div className="flex flex-col justify-center  ">
      {todos.map((todo) => (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full mx-auto  ">
          <div className="h-full flex text-center items-center border-gray-800 border p-4 rounded-lg ">
            <div className="flex-grow ">
              <h2 className="text-white title-font font- ">
                {todo.title}{" "}
              </h2>
              <p className="text-gray-600">{todo.task} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todolist;