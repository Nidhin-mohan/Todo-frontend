
import './App.css';
import Header from './Components/Header';
import TodoDispay from './Components/TodosDispay';
import TodoForm from './Components/TodoForm';


function App() {
  return (
    <div className="App" class="text-gray-400 bg-gray-900 body-font">
      <Header />
      <TodoForm />
      <TodoDispay />
    </div>
  );
}

export default App;
