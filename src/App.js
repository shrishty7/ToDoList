import React, {useState} from 'react';
import "./App.css";

//importing components
import Form from './Components/form';
import ToDoList from './Components/ToDoList';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
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
      />
      <ToDoList setTodos={setTodos} todos = {todos} />
    </div>
  );
}

export default App;
