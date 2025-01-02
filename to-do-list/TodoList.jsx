import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useContext(TodoContext);
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
