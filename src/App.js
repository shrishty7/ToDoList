import React, {useState, useEffect} from 'react';
import "./App.css";

//importing components
import Form from './Components/form';
import ToDoList from './Components/ToDoList';
function App() {
  //use effect 
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;


    }
  }

 
  return (
    <div className="App">
      <header>
        <h1>To Do List Revirt</h1>
      </header>
      <Form 
        inputText = {inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus = {setStatus}
      />
      <ToDoList setTodos={setTodos} todos = {todos} filteredTodos = {filteredTodos}
 />
    </div>
  );
}

export default App;
