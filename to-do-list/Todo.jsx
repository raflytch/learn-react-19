import { useContext, useState } from "react";
import { TodoDispatchContext } from "./TodoContext";

const Todo = ({ todo }) => {
  const dispatch = useContext(TodoDispatchContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo,
    });
  };

  const handleUpdateTodo = (event) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { ...todo, text: event.target.value },
    });
  };

  return (
    <div>
      <input type="text" value={todo.text} onChange={handleUpdateTodo} />{" "}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
