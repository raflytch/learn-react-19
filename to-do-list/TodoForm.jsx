import { useContext, useState } from "react";
import { TodoDispatchContext } from "./TodoContext";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useContext(TodoDispatchContext);

  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: { text: todo, id: Date.now() },
    });
    setTodo("");
  };

  return (
    <div>
      <h1>Todo Form</h1>
      <input
        type="text"
        placeholder="Add Your Todo"
        value={todo}
        onChange={handleChangeTodo}
      />

      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
