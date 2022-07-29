import React from "react";

const Todo = ({text, todo, todos, setTodos, key}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));

    };

    const completeHandler = () => {
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
        <div className={` "todo"  ${todo.completed ? "completed" : "incomplete"} `} >
            
            
            <li className={`todo-item`}>{text}</li>
            <img className = {`${todo.completed ? "display" : "displaynone"}`} src="https://i.ibb.co/9VLmKTt/icons8-checkmark-64.png"></img>
            <hr></hr>
            <button onClick = {completeHandler} className ={ `complete-btn`} >
            Mark as {todo.completed? "incomplete" : "completed"}
            </button>


            <button onClick={deleteHandler} className = "trash-btn">Delete</button>

        </div>
    );
};

export default Todo;