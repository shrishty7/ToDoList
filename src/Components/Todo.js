import React from "react";

const Todo = ({text, todo, todos, setTodos, key}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));

    };

    const completeHandler = () => {
        // document.getElementsByClassName("complete-btn").innerHTML="Mark as InComplete";
        setTodos(todos.map((item) => {
            if (item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;

        }));
    }
    return (
        <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>

        <button onClick = {completeHandler} className ={ `complete-btn`} >
          Click me
        </button>

        <button onClick={deleteHandler} className = "trash-btn">Delete</button>
        </div>
    );
};

export default Todo;