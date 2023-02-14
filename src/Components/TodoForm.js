import React,{useState} from 'react'
import axios from "axios";
// import toast from "react-toastify";
// import toast from "react-hot-toast";

const TodoForm = ({ fetchTodosData, BASE_URL }) => {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);

  const submitTodo = async () => {
    try {
      const todos = {
        title : todo,
        task: task,
      };
      const res = await axios.post(`${BASE_URL}/createTodo`, todos);

       if (res.data.success) {
        //  toast.success("User created successfully");
        console.log("succes")
         fetchTodosData();
       }

    }catch(error){
        // toast.error(error.response.data.message);
        console.log(error)
    }
  };

  const handleSubmit = (e) => {
       e.preventDefault();
       submitTodo();
       setTodo('');
       setTask('');

  }

  return (
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4 py-12"
      >
        <div className="relative sm:mb-0 flex-grow w-full">
          <label htmlFor="todo" className="leading-7 text-sm text-gray-400">
            Todo
          </label>
          <input
            type="text"
            id="todo"
            todo="todo"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="relative sm:mb-0 flex-grow w-full">
          <label htmlFor="task" className="leading-7 text-sm text-gray-400">
            Task
          </label>
          <input
            type="text"
            id="email"
            task="task"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button
          className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          type="submit"
        >
          Button
        </button>
      </form>
    </div>
  );
};

export default TodoForm