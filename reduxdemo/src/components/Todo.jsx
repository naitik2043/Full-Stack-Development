import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import { deleteTodo } from "../redux/action";
import { toggleTodo } from "../redux/action";

function Todo() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(addTodo(text))}>Add</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              Toggle
            </button>
          </span>
          <span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
            >
              Delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
export default Todo;
