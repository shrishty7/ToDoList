import React from "react";


const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {

  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random()*1000}]);
      setInputText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

    return (
        <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Enter the task here" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        Submit
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed Tasks</option>
          <option value="uncompleted">Remaining Tasks</option>
        </select>
      </div>
    </form>
    );
}

export default Form;