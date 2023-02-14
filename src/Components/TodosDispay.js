import React from 'react'

import Todolist from './Todolist';


const TodoDispay = ({todos}) => {
 

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2   text-white">
            Todos
          </h1>
        </div>

        <div className=" ">
          {todos && <Todolist todos={todos} />}
          </div>
      </section>
    </div>
  );
}

export default TodoDispay