import React from 'react'

const TodoForm = () => {
  return (
     <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4 py-12">
      <div class="relative sm:mb-0 flex-grow w-full">
        <label for="todo" class="leading-7 text-sm text-gray-400">Todo</label>
        <input type="text" id="todo" name="todo" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative sm:mb-0 flex-grow w-full">
        <label for="task" class="leading-7 text-sm text-gray-400">Task</label>
        <input type="text" id="email" name="task" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
    </div>
  )
}

export default TodoForm