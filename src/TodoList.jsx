import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [date, setDate] = useState("");


    function AddTodo() {
        if (newTodo && date !== "") {
            setTodos([...todos, { newtodo: newTodo, date: date }]);
        }
        else {
            alert("Please enter a Todo & Date");
        }



        setNewTodo("");
        setDate("")
    };
    function handleTodo(event) {
        setNewTodo(event.target.value)

    };
    function handleDate(event) {
        setDate(event.target.value)
    }
    function deleteTodo(index) {
        setTodos(todos.filter((todos, i) => i !== index));
    }

    return (

        <div className="todolist">
            <h1>Todo List</h1>
            <div className="inputList">
                <input type="text" value={newTodo} onChange={(e) => handleTodo(e)} placeholder="Enter New task......." />
                <input type="date" value={date} onChange={(e) => handleDate(e)} />
                <button onClick={AddTodo} className="Add-todo">Add To-Do</button>
            </div>

            <ol>
                {
                    todos.map((todo, index) => {
                        return (
                            <li key={index}>
                                {todo.newtodo + "  "}      {todo.date}
                                <button className="Delete-todo" onClick={() => deleteTodo(index)}>Delete</button>
                            </li>
                        )
                    })

                }
            </ol>
        </div>
    )
}
export default TodoList;