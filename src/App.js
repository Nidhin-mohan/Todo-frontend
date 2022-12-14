
import './App.css';
import Header from './Components/Header';
import TodoDispay from './Components/TodosDispay';
import TodoForm from './Components/TodoForm';
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:4000/todo";


function App() {
    const [todos, setTodos] = useState("");

    const fetchTodosData = async () => {
      const resp = await axios.get(` ${BASE_URL}/getTodos`);

      setTodos(resp.data.todos);
    };

    useEffect(() => {
      fetchTodosData();
      console.log("useeffect calling fetch data");
    }, []);

  return (
    <div className="App" class="text-gray-400 bg-gray-900 body-font">
      <Header />
      <TodoForm />
      <TodoDispay 
      todos ={todos}  
      />
    </div>
  );
}

export default App;
