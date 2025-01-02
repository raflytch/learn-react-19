import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodoContext, TodoDispatchContext } from "./TodoContext";
import { useReducer } from "react";

const TodoApp = () => {
  const initialTodo = [
    { id: 1, text: "Belajar React" },
    { id: 2, text: "Belajar CSS" },
    { id: 3, text: "Belajar HTML" },
  ];

  const todoReducer = (state, action) => {
    if (action.type === "ADD_TODO") {
      return [...state, action.payload];
    } else if (action.type === "DELETE_TODO") {
      return state.filter((todo) => todo.id !== action.payload.id);
    } else if (action.type === "UPDATE_TODO") {
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    }
    return state;
  };

  const [todo, dispatch] = useReducer(todoReducer, initialTodo);
  return (
    <div>
      <TodoContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={dispatch}>
          <h1>Todo App</h1>
          <TodoForm />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoContext.Provider>
    </div>
  );
};

export default TodoApp;
